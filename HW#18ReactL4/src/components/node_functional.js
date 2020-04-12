//////////////////////////////////////////////////
//creating functional component for React
//not to owerwirite add to name of the folder '!' - exmpl - '!subfolderName'
const fs = require('fs');
const path =require('path')


//console.log('dirname',__dirname)

let directoryPath = __dirname;

fs.readdir(directoryPath, function (err, entries) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    
    entries.forEach(function (file) {

        let componentTextTemplate =`
        	import React, { Component, useState, useEffect } from 'react';
			function ${file}(){

    			useEffect(()=>{},[])

    			//using setState HOOK
    			const [item, setItem] = useState({});


    			return (
      				<div>
                         ${file}
      				</div>
    			);
			}

			export default ${file};

        `;



        const stat = fs.lstatSync(path.resolve(__dirname,file)).isDirectory();
        
    	//check if entry(file) is directory and it's name havent !
        if(stat && file.includes('!')==false){
		/*
        	console.log('entrie -- ',file);
        	console.log(stat)*/
        	//get file and directory .js
        	let compPathAndName = path.resolve(__dirname,file,file.concat('.js'));
        	//console.log(compPathAndName)
        	//write to file
        	fs.writeFile(compPathAndName, componentTextTemplate, function (err) {
  				if (err) return console.log(err);
  				console.log(file,' component created!');
			});


        }


    });
});


