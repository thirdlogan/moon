export class MediaFile {
    public mediaFileId: number = 0;
    public starId: number = 0;
    public uri: string = '';
    public thumbUri: string = '';
    public title: string = '';
    public dateCreated: Date = new Date();
    public typeCode: string = 'pic';
    public metadata: any;
}