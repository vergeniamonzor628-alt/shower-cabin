import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';

// TODO: User needs to provide TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { cabinType, dimensions, contacts } = data;

    // 1. Generate Excel File (Mocking the template structure for now)
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Размерный лист');
    
    // Set some styling
    sheet.columns = [
      { header: 'Параметр', key: 'param', width: 30 },
      { header: 'Значение', key: 'value', width: 40 }
    ];
    sheet.getRow(1).font = { bold: true };
    
    // Add Data
    sheet.addRow({ param: 'Тип кабины', value: cabinType });
    sheet.addRow({ param: 'Ширина (мм)', value: dimensions.width || 'Не указано' });
    sheet.addRow({ param: 'Высота (мм)', value: dimensions.height || 'Не указано' });
    sheet.addRow({ param: 'Глубина (мм)', value: dimensions.depth || 'Не указано' });
    sheet.addRow({ param: 'Комментарии / Фурнитура', value: dimensions.notes || 'Нет' });
    sheet.addRow({ param: 'Имя клиента', value: contacts.name });
    sheet.addRow({ param: 'Телефон', value: contacts.phone });
    sheet.addRow({ param: 'TG/WA', value: contacts.email || 'Не указан' });
    sheet.addRow({ param: 'Дата заказа', value: new Date().toLocaleString('ru-RU') });

    // Write to buffer
    const excelBuffer = await workbook.xlsx.writeBuffer();

    // 2. Prepare message for Telegram
    const message = `
🔔 *Новая заявка на чертеж!*
*Тип:* ${cabinType}
*Размеры:* ${dimensions.width}x${dimensions.height}${dimensions.depth ? 'x'+dimensions.depth : ''}
*Клиент:* ${contacts.name} (${contacts.phone})
*TG/WA:* ${contacts.email || '-'}
`;

    // 3. Send to Telegram (if token exists)
    if (BOT_TOKEN && CHAT_ID) {
      // Send message
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      // Send document
      const formData = new FormData();
      formData.append('chat_id', CHAT_ID);
      const fileBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      formData.append('document', fileBlob, 'Размерный_лист.xlsx');

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
        method: 'POST',
        body: formData
      });
    } else {
      console.log('Telegram tokens not set. Logging data instead:');
      console.log(message);
      // We still return success so the frontend continues
    }

    return NextResponse.json({ success: true, message: 'Заказ успешно создан' });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json({ success: false, error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
