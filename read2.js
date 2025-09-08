import {readFile} from "fs/promises";


async function readMyFile(fileName){
    try{

        const content = await readFile(fileName,"utf8");

        console.log(`ファイル「${fileName}」の内容`)
        console.log(content);

    }catch(err){console.error("読み込み中にエラーが発生しました",err);


    }





}

readMyFile("hello.txt");



