function chatBot() {

	// current user input
	this.input;

	/**
	 * respondTo
	 *
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 *
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {

		this.input = input.toLowerCase();

		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "hey!";

		if(this.match('what[^ ]* up') || this.match('sup'))
			return "nothing much, how are you?";

		if(this.match('how are you'))
			return "i am great, how are you?";

		if(this.match('okay') || this.match('great') || this.match('good') || this.match('fine'))
			return ["that's great!", "do you like memes?"];

		if(this.match('bad') || this.match('terrible'))
			return "cheer up! :)";

		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";

		if(this.match('^no+(\\s|!|\\.|$)'))
			return "don't be such a negative nancy :(";

		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return "alright, see you around";

		if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];

		if(this.match('(meme)') && !this.match('(hate|dumb|stupid)'))
			return "i too love a good meme lol";

		if(this.match('(meme)') && this.match('(hate|dumb|stupid)'))
			return "aww c'mon, memes are great!";

		if(this.match('nevermind'))
			return ["uhh..", "okay?"];

		if(this.match('(sorry)'))
			return "it's not okay";

		if(this.input == 'noop')
			return;

		return "what?";
	}

	/**
	 * match
	 *
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {

		return new RegExp(regex).test(this.input);
	}
}
