#!/bin/bash

#this will automatically push everything 

git pull origin master > temp.txt

temp=$(egrep "Already" temp.txt)
last=$(egrep "d*" fin.txt)
COUNT=0
while [ ${#last} -eq 0 ]; do
	if [ ${#temp} -eq 0 ]; then
		git push delp master 
	fi	
	echo "pushed!"
	#if [ $((COUNT % 4)) -eq 0 ]; then
	#	mail -s "The Code has been pushed" "campb215@purdue.edu" < out.txt 
	#fi
	COUNT=COUNT+2;
	sleep 120 
done
