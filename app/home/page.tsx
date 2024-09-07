"use client"

import Card from "@/components/Card";

const Hero = () => {
  return (
    <section id="home"
      role="region"
      aria-labelledby="hero-heading"
      className="section-offset flex justify-center items-center min-h-screen"
      style={{ backgroundImage: "url('/static/tree.jpg"}}>
      <Card
        background="linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
        color="#333"
        width="90%"
        maxWidth="600px"
        padding="1rem"
        margin="1rem auto"
        border="none"
        borderRadius="15px"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)">
      <h2>Kim Robinson</h2>
      <p>something cool here</p>
      </Card>
    </section>
  )
}
export default Hero;