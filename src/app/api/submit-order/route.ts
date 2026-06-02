import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Formatting message based on orderType
    let message = `🆕 *НОВАЯ ЗАЯВКА НА ЧЕРТЕЖ*\n\n`;
    
    message += `👤 *Клиент:*\n`;
    message += `• Имя: ${data.name}\n`;
    message += `• Телефон: ${data.phone}\n`;
    if (data.telegram) {
      message += `• Telegram: ${data.telegram}\n`;
    }
    message += `\n`;

    if (data.orderType === "template") {
      message += `🚿 *Шаблонный заказ:*\n`;
      message += `• Тип: ${data.cabinType || 'Не выбран'}\n`;
      message += `• Ширина: ${data.width || 'Не указана'}\n`;
      message += `• Высота: ${data.height || 'Не указана'}\n`;
      if (data.depth) message += `• Глубина: ${data.depth}\n`;
      
      message += `\n🔩 *Фурнитура / Зазоры:*\n`;
      message += `${data.hardware ? data.hardware : 'Не указано'}\n`;
    } else {
      message += `🛠 *Индивидуальный проект:*\n`;
      message += `${data.customDescription || 'Описание отсутствует'}\n`;
    }

    message += `\n⏳ *Статус:* Ожидает оплату`;

    if (BOT_TOKEN && CHAT_ID) {
      const tgUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const response = await fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        console.error('Telegram API error:', await response.text());
        return NextResponse.json({ error: 'Failed to send telegram message' }, { status: 500 });
      }
    } else {
      console.log('No TELEGRAM_BOT_TOKEN provided. Outputting to console:');
      console.log(message);
    }

    // TODO: В будущем здесь будет генерация Excel-файла
    // const workbook = new ExcelJS.Workbook();
    // await workbook.xlsx.readFile('./template.xlsx');
    // ...
    // И отправка файла в ТГ (sendDocument)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submit order error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
