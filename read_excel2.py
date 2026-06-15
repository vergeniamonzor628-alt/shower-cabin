import pandas as pd
import json

file_path = r'C:\Users\Katya\Downloads\Telegram Desktop\Типы душевых.xlsx'
xls = pd.ExcelFile(file_path)
data = {}
for sheet in xls.sheet_names:
    df = pd.read_excel(xls, sheet)
    df = df.dropna(how='all').dropna(axis=1, how='all')
    data[sheet] = df.to_dict(orient='records')

with open('excel_data2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
