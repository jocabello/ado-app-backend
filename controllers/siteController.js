const {response} = require('express');
const Site = require('../models/SiteModel');


const getSites = async () => {
    const sites = await Site.find();

    res.status(200).json(sites);
};

const createSite = async (req,res = response) => {

    const site = new Site(req.body);

    try {
        
        const siteSaved = await site.save();

        res.json({
            ok: true,
            site: siteSaved
        })

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
};

const updateSite = async (req,res = response) => {

    const siteId = req.params.id;
    const _id = req._id;

    try {
        
        const site = await Site.findById(siteId);

        // if(event.user.toString() !== _id){
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'Not authorized'
        //     });
        // }        

        if(!site){
            return res.status(404).json({
                ok: false,
                msg: 'Site not found'
            });
        }

        const newSite = {
            ...req.body,
            // user: _id
        }

        // {new:true} opción para que retorne el nuevo objeto y no el viejo por defecto
        const updatedSite = await Site.findByIdAndUpdate(siteId, newSite, {new:true});

        res.json({
            ok: true,
            site: updatedSite
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
};

const deleteSite = async (req,res = response) => {

    const siteId = req.params.id;
    const _id = req._id;


    try {

        const site = await Site.findById(siteId);
        
        // if(employee.user.toString() !== _id){
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'Not authorized'
        //     });
        // }

        if(!site){
            return res.status(404).json({
                ok: false,
                msg: 'Site not found'
            });
        }

        await Site.findByIdAndDelete(siteId);

        res.json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
};

module.exports = {
    getSites,
    createSite,
    updateSite,
    deleteSite
};