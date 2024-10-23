import ButtonLink from "@/components/ButtonLink";

const Contact = () => {
  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
      className="text-[#121212] dark:text-white"
    >
      <div className="border-slate-500 py-8 px-4 sm:py-16 xl:px-16 max-w-4xl mx-auto" id="contact-form">
        <h2 className="text-4xl font-bold mb-4" id="contact-heading">Let&#39;s connect!</h2>
        <div className="flex flex-row">
          <h5 className="pr-5"><a href="https://github.com/kimmykokonut">GitHub</a></h5>
          <h5><a href="https://www.linkedin.com/in/robinson-kim/">LinkedIn</a></h5>
        </div>
        <div className="text-center">
          <p>or you can fill out this form: </p>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfVZSYVrelhSgGoVTNseTXAouYw8i0ZR0ZrdeauRuJC63BeoQ/formResponse"
            method="POST">
            <fieldset>
              <legend>Name</legend>
              <label htmlFor="entry.1437336806"><input id="entry.1437336806" name="entry.1437336806" type="text"
                placeholder="Ada Lovelace" /></label>
            </fieldset>

            <fieldset>
              <legend>Email</legend>
              <label htmlFor="entry.181086285"><input id="entry.181086285" name="entry.181086285" type="email"
                placeholder="ada@lovelace.com" /></label>
            </fieldset>

            <fieldset>
              <legend>Subject</legend>
              <label htmlFor="entry.1106511008"><input id="entry.1106511008" name="entry.1106511008" type="text"
                placeholder="Let's collaborate" /></label>
            </fieldset>

            <fieldset>
              <legend>Message</legend>
              <label htmlFor="entry.1356598461"><textarea id="entry.1356598461" name="entry.1356598461"
                placeholder="Where do I begin..."></textarea></label>
            </fieldset>
            <br />
            <input type="submit" value="Send Message" className="button-link" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;