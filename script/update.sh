#!/bin/bash
echo 'Запуск обновления';
rm -rf dist;
ng build --prod;
scp -r dist/client-arenda rdwork_linaz_front@rdwork.beget.tech:/home/r/rdwork/frontend-stroika-arenda
ssh rdwork_linaz_front@rdwork.beget.tech '
rm -rf public_html/*;
mv client-arenda/* public_html/;
cp .htaccess public_html/;
rm -rf client-arenda;'
echo 'Конец обновления';
