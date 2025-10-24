import conf from '../conf.js'
import { Client, TablesDB , Storage, Query, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try{
            return await this.databases.createRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionID,
                rowId: slug,
                data: {title, content, featuredImage, status, userID }
            });
        }catch(error){
            throw error;
        }
    }

    async createPost(slug,{title, content, featuredImage, status}){
        try{
            return await this.databases.updateRow(
                           conf.appwriteDatabaseID,
                           conf.appwriteCollectionID,
                           slug,
                            { title, content, featuredImage, status }
                        );
        }catch(error){
            throw error;
        }
    }
    
    async deletePost(){
        try {
            await this.databases.deleteRow({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.appwriteCollectionID,
            rowId: slug
        });
            return true;
        } catch (error) {
            throw error
        }
    }

    async getPost(){
        try {
            return await this.databases.getRow({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.appwriteCollectionID,
            rowId: slug
        });
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries= [ Query.equal("status","active")]){
        try {
            return await this.databases.listRows({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.appwriteCollectionID,
            queries: queries
        });
        } catch (error) {
            throw error
        }
    }

    // File Upload Service
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketID,
                fileId: ID.unique(),
                file: file
            });
        } catch (error) {
            throw error; 
        }
    }

     async deleteFile(fileID){
        try {
                await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketID,
                fileId: fileID,
            });
            return true;
        } catch (error) {
            throw error; 
        }
    }

      getFilePreview(fileID){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketID,
            fileId: fileID
        })
      }
}

const service = new Service()

export default service