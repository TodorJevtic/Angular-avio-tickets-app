import {Router} from 'express';
import { sample_tags, sample_tickets } from '../data';
import asyncHandler from 'express-async-handler';
import { TicketModel } from '../models/ticket.model';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
       const ticketsCount = await TicketModel.countDocuments();
       if(ticketsCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await TicketModel.create(sample_tickets);
       res.send("Seed Is Done!");
   }
   ))


   router.get("/",asyncHandler(
    async (req, res) => {
      const tickets = await TicketModel.find();
        res.send(tickets);
    }
  ))

  router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const tickets = await TicketModel.find({odredisna_lokacija: {$regex:searchRegex}})
      res.send(tickets);
    }
  ))

  router.get("/tags", asyncHandler(
    async (req, res) => {
      const tags = await TicketModel.aggregate([
        {
          $unwind:'$tags'
        },
        {
          $group:{
            _id: '$tags',
            count: {$sum: 1}
          }
        },
        {
          $project:{
            _id: 0,
            name:'$_id',
            count: '$count'
          }
        }
      ]).sort({count: -1});
  
      const all = {
        name : 'All',
        count: await TicketModel.countDocuments()
      }
  
      tags.unshift(all);
      res.send(tags);
    }
  ))

router.get("/tags/:tagName",asyncHandler(
    async (req, res) => {
      const tickets = await TicketModel.find({tags: req.params.tagName})
      res.send(tickets);
    }
  ))
  
router.get("/:ticketId", asyncHandler(
    async (req, res) => {
      const ticket = await TicketModel.findById(req.params.ticketId);
      res.send(ticket);
    }
  ))

export default router;