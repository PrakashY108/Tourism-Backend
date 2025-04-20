import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `planmytrip2025@gmail.com`,
      pass: 'outgfjxqmzailoxr'
    },
  });