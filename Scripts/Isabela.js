/*					Isabela - 0.1


	Copyright 2017 Christopher Ribeiro

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

*/


// Main Isabela object;
Isabela = {
	Language: "English",

	// Get a random message and return it;
	Answer: function (Message) {
		if (this.Language == "English") {
			// Principal loop in the EnglishPatterns;
			for (var Item = 0; Item < EnglishPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (EnglishPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = EnglishAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}


			// If reaches here, means that the user message is something else;

			// Principal loop in the AnythingPatterns;
			for (var Item = 0; Item < AnythingPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (AnythingPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = EnglishAnythingAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}
		}
		else {
			// Principal loop in the PortuguesePatterns;
			for (var Item = 0; Item < PortuguesePatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (PortuguesePatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = PortugueseAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}


			// If reaches here, means that the user message is something else;

			// Principal loop in the AnythingPatterns;
			for (var Item = 0; Item < AnythingPatterns.length; Item++) {
				// Check if the current regex matches;
				if (Message.match (AnythingPatterns[Item])) {
					// Store the possible answers to the message;
					PossibleAnswers = PortugueseAnythingAnswers[Item];

					// Pick a random answer in the PossibleAnswers;
					RandomAnswer = PossibleAnswers[Math.floor(Math.random() * PossibleAnswers.length)];

					// Return the random answer;
					return RandomAnswer;
				}
			}
		}
	}
};

