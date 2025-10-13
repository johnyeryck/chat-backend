export const emaildata = (email: string, url: string) => {
  return {
    from: "johnyeryckdev@gmail.com",
    to: email,
    subject: "Confirme seu email",
    html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="background-color: #0a0a0a; padding: 40px 20px; min-height: 400px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(190, 255, 0, 0.15);">
        
        <!-- Header com gradiente -->
        <div style="background: linear-gradient(135deg, #beff00 0%, #88cc00 100%); padding: 30px; text-align: center;">
        <h1 style="margin: 0; color: #0a0a0a; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">
        Confirme seu Email
        </h1>
        </div>
        
        <!-- Conteúdo -->
        <div style="padding: 40px 30px;">
        <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Olá! 👋
        </p>
        <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Estamos quase lá! Para concluir a criação da sua conta, precisamos confirmar que este é realmente seu endereço de email.
        </p>
        
        <!-- Botão de confirmação -->
        <div style="text-align: center; margin: 40px 0;">
        <a href="${url}" style="display: inline-block; background: linear-gradient(135deg, #beff00 0%, #a8dd00 100%); color: #0a0a0a; text-decoration: none; padding: 16px 48px; border-radius: 8px; font-size: 18px; font-weight: bold; letter-spacing: 0.5px; box-shadow: 0 4px 20px rgba(190, 255, 0, 0.3); transition: all 0.3s ease;">
        Confirmar Email
        </a>
        </div>
        
        <p style="color: #888; font-size: 14px; line-height: 1.6; margin: 30px 0 10px 0; text-align: center;">
        Ou copie e cole este link no seu navegador:
        </p>
        <p style="color: #beff00; font-size: 13px; word-break: break-all; text-align: center; margin: 0; padding: 15px; background-color: #0a0a0a; border-radius: 6px; border-left: 3px solid #beff00;">
        ${url}
        </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #0a0a0a; padding: 25px 30px; border-top: 1px solid #2a2a2a;">
        <p style="color: #666; font-size: 13px; line-height: 1.5; margin: 0 0 8px 0; text-align: center;">
        Se você não criou uma conta, pode ignorar este email com segurança.
        </p>
        <p style="color: #444; font-size: 12px; margin: 0; text-align: center;">
        Este link expira em 24 horas por motivos de segurança.
        </p>
        </div>
        
        </div>
        
        <!-- Copyright -->
        <p style="color: #444; font-size: 12px; text-align: center; margin: 30px 0 0 0;">
        © ${new Date().getFullYear()} Todos os direitos reservados.
        </p>
        </div>
        </body>
        </html>
        `,
  };
};
