const Contact = () => {
  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
      className="text-[#121212] dark:text-white"
    >
      <div
        className="border-slate-500 py-8 px-4 sm:pt-32 lg:px-6 max-w-4xl mx-auto"
        id="contact-form"
      >
        <h2 className="text-4xl font-bold mb-4" id="contact-heading">
          Let&#39;s connect!
        </h2>
        <hr />
        <div className="flex justify-end mb-2 lg:mr-64">
          <h5 className="pr-5 hover:text-green-600">
            <a href="https://github.com/kimmykokonut">GitHub</a>
          </h5>
          <h5 className="hover:text-green-600">
            <a href="https://www.linkedin.com/in/robinson-kim/">LinkedIn</a>
          </h5>
        </div>
        <hr />
        <form
          className="w-full max-w-lg pt-4"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfVZSYVrelhSgGoVTNseTXAouYw8i0ZR0ZrdeauRuJC63BeoQ/formResponse"
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <fieldset>
                <legend>Name</legend>
                <label
                  htmlFor="entry.1437336806"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  <input
                    id="entry.1437336806"
                    name="entry.1437336806"
                    type="text"
                    placeholder="Ada Lovelace"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    aria-label="Name"
                  />
                </label>
              </fieldset>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <fieldset>
                <legend>Email</legend>
                <label
                  htmlFor="entry.181086285"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  <input
                    id="entry.181086285"
                    name="entry.181086285"
                    type="email"
                    placeholder="ada@lovelace.com"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </label>
              </fieldset>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <fieldset>
                <legend>Subject</legend>
                <label
                  htmlFor="entry.1106511008"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  <input
                    id="entry.1106511008"
                    name="entry.1106511008"
                    type="text"
                    placeholder="Let's collaborate"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </label>
              </fieldset>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <fieldset>
                <legend>Message</legend>
                <label
                  htmlFor="entry.1356598461"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  <textarea
                    id="entry.1356598461"
                    name="entry.1356598461"
                    rows={4}
                    placeholder="Where do I begin..."
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </label>
              </fieldset>
              <br />
              <input
                type="submit"
                value="Send Message"
                className="button-link"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
