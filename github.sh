#!/bin/sh

#Altere as variáveis abaixo de acordo com a sua necessidade
#na variável repositório, prefira a url do repositório baseada em https para nao termos que configurar SSH
export name='Narutex 216 bits'
export email="djxan@yahoo.com.br"
export repositorio="https://github.com/Narutex216Bits/pw2_node_intro.git";

#Daqui pra baixo mexa somente se for realmente necessário ou se souber o que está fazendo :P

export branch_name="aula2802"

rm -Rf .git

#add linux, mac and windows folders to gitignore
echo "" >> .gitignore
echo "#ignoring windows, mac and linux folders" >> .gitignore
echo "windows" >> .gitignore
echo "mac" >> .gitignore
echo "linux" >> .gitignore
#echo "node_movdules" >> .gitignore

git init
git remote add origin $repositorio
git checkout -b $branch_name

git config --global user.name $name
git config --global user.email $email

git add .gitignore
git commit -m "added ignored files" .gitignore

git add .

git commit -am "branch com o código da aula do dia $(date)"

git push origin $branch_name
