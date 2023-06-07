const companyData = `
<url>
<loc>https://company.example.com/</loc>
<desc>Nombre de la empresa: Botify</desc>
</url>
<url>
<loc>https://company.example.com/about-us</loc>
<desc>Sobre nosotros: Somos un proveedor líder de bots impulsados por IA para automatizar diversos servicios.</desc>
</url>
<url>
<loc>https://company.example.com/services/restaurant-booking</loc>
<content>
    <bot>
    <url>https://company.example.com/bots/restaurant-booking</url>
    <desc>Bot de Reservas de Restaurantes</desc>
    <features>
        <feature>Reserva automatizada de mesas</feature>
        <feature>Disponibilidad en tiempo real</feature>
        <feature>Integración con plataformas de reservas populares</feature>
    </features>
    <pricing>
        <plan>
            <name>Básico</name>
            <price>$29/mes</price>
            <description>Incluye funciones básicas y soporte</description>
        </plan>
        <plan>
            <name>Pro</name>
            <price>$59/mes</price>
            <description>Incluye funciones avanzadas y soporte prioritario</description>
        </plan>
        <plan>
            <name>Enterprise</name>
            <price>Personalizado</price>
            <description>Funciones personalizables y soporte dedicado</description>
        </plan>
    </pricing>
    </bot>
</content>
</url>
<url>
<loc>https://company.example.com/services/automated-booking</loc>
<content>
    <bot>
    <url>https://company.example.com/bots/automated-booking</url>
    <desc>Bot de Reservas Automatizadas</desc>
    <features>
        <feature>Programación de citas simplificada</feature>
        <feature>Recordatorios automáticos</feature>
        <feature>Integración con calendarios</feature>
    </features>
    <pricing>
        <plan>
            <name>Básico</name>
            <price>$19/mes</price>
            <description>Incluye funciones básicas y soporte</description>
        </plan>
        <plan>
            <name>Pro</name>
            <price>$39/mes</price>
            <description>Incluye funciones avanzadas y soporte prioritario</description>
        </plan>
        <plan>
            <name>Enterprise</name>
            <price>Personalizado</price>
            <description>Funciones personalizables y soporte dedicado</description>
        </plan>
    </pricing>
    </bot>
</content>
</url>
`;

export default companyData;
