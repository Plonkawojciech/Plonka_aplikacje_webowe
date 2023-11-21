import express from 'express'

const router = express.Router()

router
  .route('/')
  .get((req, res) => {
    res.render('kontakt')
  })
  .post((req, res) => {
    console.log(
      `${req.body.name}
       ${req.body.email}
       ${req.body.number}
       ${req.body.textarea}`
    )
    res.redirect('./')
  })

export default router
