import { initializeApp } from "firebase/app";
import {getFireStore, collection, addDoc, getDocs, doc, updateDoc,deleteDoc} from 'firebase/firestore'
import { API_KEY } from "../../constants/envValues";

export class Database {
    constructor () {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "todolist-74bcb.firebaseapp.com",
            projectId: "todolist-74bcb",
            storageBucket: "todolist-74bcb.appspot.com",
            messagingSenderId: "423151834299",
            appId: "1:423151834299:web:c5327a35aed7b4de5d059e",
            measurementId: "G-4WLB56JRE2"
          };

          const app = initializeApp(firebaseConfig);
          this._database = getFireStore(app)
    }

    create(collectionKey, body){
        const collectionRef = collection(this._database, collectionKey)
        return addDoc(collectionRef, body)
    }
    read(collectionKey){
        const collectionRef = collection(this._database, collectionKey)
        return getDocs(collectionRef).then((documents) => {
            return documents.docs.map((doc) => ({...doc.data(), id: doc.id}))
        })
    }
    update(collectionKey, id, body){
        const document = doc(this._database, collectionKey, id)
        return updateDoc(document, body)
    }
    delete(collectionKey, id){
        const document = doc(this._database, collectionKey, id)
        return deleteDoc(document)
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}