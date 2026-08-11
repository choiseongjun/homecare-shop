export interface UploadedAsset{url:string;key:string;name:string;size:number;type:string}
export interface ImageStorage{upload(file:File,scope:string):Promise<UploadedAsset>;remove(key:string):Promise<void>}
export class LocalImageStorage implements ImageStorage{async upload(file:File,scope:string){const key=`${scope}/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g,"-")}`;return {key,url:`/uploads/${key}`,name:file.name,size:file.size,type:file.type}}async remove(){return Promise.resolve()}}
// S3 또는 R2 구현체는 ImageStorage 계약만 구현하면 서비스 코드를 바꾸지 않고 교체할 수 있습니다.
