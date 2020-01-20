import express from 'express';
import * as mangaController from '../controllers/mangaController';
import * as chapterController from '../controllers/chapterController';
import * as authorController from '../controllers/authorController';
import * as authController from '../controllers/authController';
import * as userController from '../controllers/userController';

const route = express.Router();

route.get('/mangas', mangaController.getMangas);
route.get('/manga/:mangaID', mangaController.getMangaByID);
route.post('/manga', mangaController.addManga);
route.put('/manga/:mangaID', mangaController.updateManga);
route.delete('/manga/:mangaID', mangaController.deleteManga);

route.get('/chapters', chapterController.getChapters);
route.get('/chapter/:chapterID', chapterController.getChapterByID);
route.get('/chapter/:mangaID', chapterController.getChaptersByManga);
route.post('/chapter', chapterController.addChapter);
route.put('/chapter/:chapterID', chapterController.updateChapter);
route.delete('/chapter/:chapterID', chapterController.deleteChapter);

route.get('/authors', authorController.getAuthors);
route.get('/author/:authorID', authorController.getAuthorByID);
route.post('/author', authorController.addAuthor);
route.put('/author/:authorID', authorController.updateAuthor);
route.delete('/author/:authorID', authorController.deleteAuthor);

route.get('/users', userController.getUsers);
route.get('/user/:userID', userController.getUserByID);
route.put('/user/:userID', userController.updateUser);
route.patch('/muteUser/:userID', userController.muteUser);
route.delete('/user/:userID', userController.deleteUser);

route.get('/auths', authController.getAuths);
route.get('/auth/:authID', authController.getAuthByID);
route.post('/auth', authController.addAuth);
route.put('/auth/:authID', authController.updateAuth);
route.delete('/auth/:authID', authController.deleteAuth);

export default route;
