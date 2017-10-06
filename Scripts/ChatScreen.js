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

// Main ChatScreen Controller;
var ChatScreen = {
	// The Message Input;
	Input: undefined,
	// Where Messages Are Shown;
	Ouput: undefined,

	// Start The Whole Logic;
	Start: function () {
		// Save The Reference Of This Object;
		Me = this;

		// Pick The Message Input;
		Me.Input = document.getElementById ("MessageEntry");

		// Pick The Message Ouput;
		Me.Ouput = document.getElementById ("MessagesArea");

		// Add An Event to The Input;
		this.Input.addEventListener ("keydown", function (Event) {
			// Save The Reference Of The Text In The Input;
			var Message = Me.Input.value;

			// Check If The Pressed Key Was Enter;
			if (Event.key === "Enter" && Me.Input.value !== "") {
				// Remove The Message In The Input;
				Me.Input.value = "";

				// Escape The Message;
				var Escaped = Me.EscapeHTML (Message);

				// Get An Answer;
				var Answer = Isabela.Answer (Escaped);

				// Insert The Sent Message On Screen;
				Me.InsertMessage (Message, true);

				// Insert The Answer On Screen;
				Me.InsertMessage (Answer);
			};
		});
	},

	// Format The Message;
	EscapeHTML: function (Message) {
		// A List Of Each HTML Especial Characters
		return Message.replace (/[\x26\x0A\<>'"]/g, function (Message) {
			return "&#" + Message.charCodeAt (0) + ";"
		});
	},

	// Insert The Message On The Output;
	InsertMessage: async function (MessageContent, Sent = false) {
		// Create The Message Container Object;
		var MessageContainer = document.createElement ("div");

		// Create The Message Object;
		var Message = document.createElement ("div");
		// Insert The Message On It;
		Message.innerText = MessageContent;
		// Set The Class As A ReceivedMessage;
		Message.setAttribute ("class", "ReceivedMessage");


		// If We're Sendind The Message Update The Message Class To SentMessage;
		if (Sent) {
			Message.setAttribute ("class", "ReceivedMessage SentMessage");
		}
		// Else Wait A While;
		else {
			await this.Sleep (500);
		}

		// Insert The Message In The Message Container;
		MessageContainer.appendChild (Message);
		// Finally Insert The Message Container In The Output;
		this.Ouput.appendChild (MessageContainer);
	},

	// Sleep By A Given Time;
	Sleep: function (Milliseconds) {
		// Return A New Promise. I Don't Know What's This, Saw It On StackOverflow;
		return new Promise (Resolve => setTimeout (Resolve, Milliseconds));
	}
}

