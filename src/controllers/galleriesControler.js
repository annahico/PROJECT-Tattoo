"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGallery = exports.deleteImageByTattooArtistId = exports.updateImageById = exports.createImage = void 0;
const Gallery_1 = require("../models/Gallery");
const createImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tattoo_artist_id = req.body.tattoo_artist_id;
        const image = req.body.image;
        const newImage = yield Gallery_1.Gallery.create({
            tattoo_artist_id: tattoo_artist_id,
            image: image
        }).save();
        return res.json({
            success: true,
            message: "Uploaded image successfully",
            token: newImage
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error uploading image",
            error: error
        });
    }
});
exports.createImage = createImage;
const updateImageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = req.body.image;
        const galleryId = req.params.id;
        const gallery = yield Gallery_1.Gallery.findOneBy({
            id: parseInt(galleryId),
            tattoo_artist_id: req.token.id
        });
        if (!gallery) {
            return res.status(404).json({
                success: true,
                message: "gallery image doesnt found and cant updated",
            });
        }
        const updateImage = yield Gallery_1.Gallery.update({
            id: parseInt(galleryId)
        }, {
            image: image,
        });
        return res.json({
            success: true,
            message: "Image updated",
            data: updateImage
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "Image cant by updated",
            error: error
        });
    }
});
exports.updateImageById = updateImageById;
const deleteImageByTattooArtistId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ImageToRemove = yield Gallery_1.Gallery.findOneBy({
            tattoo_artist_id: req.token.id,
            id: req.body.id
        });
        if (ImageToRemove) {
            yield Gallery_1.Gallery.remove(ImageToRemove);
        }
        return res.json({
            success: true,
            message: "Image deleted",
            data: ImageToRemove,
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "Image cant by deleted",
            error: error,
        });
    }
});
exports.deleteImageByTattooArtistId = deleteImageByTattooArtistId;
const getAllGallery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tattoo_artists = yield Gallery_1.Gallery.find({
            select: {
                image: true,
                tattoo_artist_id: true,
                tattoo_artist: {
                    name: true,
                    surname: true,
                    email: true,
                    password: false
                }
            }, relations: {
                tattoo_artist: true
            }
        });
        return res.json({
            success: true,
            message: "Gallery retrieved",
            data: tattoo_artists
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "Gallery cant be retrieved",
            error: error
        });
    }
});
exports.getAllGallery = getAllGallery;
