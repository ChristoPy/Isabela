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


// Store english answers;
EnglishAnswers = [
	// /I need (.*)/
	["Why do you need this?",
	"Would it really help you on it?",
	"Are you sure you need this?"],

	// /Because you don't (.*)/
	["Do you really think this?",
	"Perhaps eventually I will be able to do this?",
	"Do you really want me to do this?"],

	// /Because I can't (.*)/
	["Do you think you should be able to this?",
	"If you could, what would you do?",
	"I don't know.. why can't you this?",
	"Have you really tried?"],

	// /I can't (.*)/
	["How do you know you can't?",
	"Perhaps you could do this if you tried. No?",
	"What would it take for you to do this?"],

	// /I am (.*)/
	["Did you come to me because it?",
	"How long have you been in this way?",
	"How do you feel about being like this?",
	"How does being like this make you feel?",
	"Do you enjoy being like this way?",
	"Why do you tell me you're like this?",
	"Why do you think you're this?"],

	// /You are (.*)/
	["Why does it matter?",
	"Would you prefer it if I were not?",
	"Perhaps you believe this?",
	"I may be.. what do you think?",
	"Why do you think I am this?",
	"Does it please you to think that I'm this?",
	"Perhaps you would like me to be this.",
	"Perhaps you're really talking about yourself?",
	"Why do you say I am this?",
	"Why do you think I am this?",
	"Are we talking about you, or me?"],

	// /What) (.*)/
	["Why do you ask?",
	"How would an answer to that help you?",
	"What do you think?"],

	// /How (.*)/
	["How do you suppose?",
	"Perhaps you can answer your own question.",
	"What is it you're really asking?"],

	// /Because (.*)/
	["Is that the real reason?",
	"What other reasons come to mind?",
	"Does that reason apply to anything else?",
	"If be it, what else must be true?"],

	// /(.*) sorry (.*)/
	["There are many times when no apology is needed.",
	"What feelings do you have when you apologize?"],

	// /Hi(.*)/
	["Hello... I'm glad you could drop by today.",
	"Hi there... how are you today?",
	"Hello, how are you feeling today?"],

	// /I think (.*)/
	["Do you doubt?",
	"Do you really think so?",
	"But you're not sure?"],

	// /(.*) friend (.*)/
	["Tell me more about your friends.",
	"When you think of a friend, what comes to mind?",
	"Why don't you tell me about a childhood friend?"],

	// /Yes/
	["You seem quite sure.",
	"OK, but can you elaborate a bit?"],

	// /(.*) computer(.*)/
	["Are you really talking about me?",
	"Does it seem strange to talk to a computer?",
	"How do computers make you feel?",
	"Do you feel threatened by computers?"],

	// /This is (.*)/
	["Do you think it is?",
	"Perhaps it's true, what do you think?",
	"If it were, what would you do?",
	"It could well be that.",
	"You seem very certain.",
	"If I told you that it probably isn't be, what would you feel?"],

	// /You can (.*)/
	["What makes you think I can't?",
	"If I could, then what?",
	"Why do you ask if I can?"],

	// /I can (.*)/
	["Perhaps you don't want to?",
	"Do you want to be able to this?",
	"If you could, would you?"],

	// /I don't (.*)/
	["Don't you?",
	"Why don't you?",
	"Do you want to be able?"],

	// /I feel (.*)/
	["Good, tell me more about these feelings.",
	"Do you often feel this?",
	"When do you usually feel it?",
	"When you feel, what do you do?"],

	// /I have (.*)/
	["Why do you tell me this?",
	"Have you really?",
	"Now that you have it, what will you do next?"],

	// /I can (.*)/
	["Could you explain?",
	"Why would you?",
	"Who else knows that you would?"],

	// /There (.*)/
	["Do you think there is?",
	"It's likely that there is.",
	"Would you like there to be?"],

	// /Mine (.*)/
	["I see.",
	"Why do you say that?",
	"How do you feel?"],

	// /You (.*)/
	["We should be discussing you, not me.",
	"Why do you say that about me?",
	"Why do you care?"],

	// /Because (.*)/
	["Why don't you tell me the reason why?",
	"Why do you think it?" ],

	// /I want (.*)/
	["What would it mean to you if you got it?",
	"Why do you want this?",
	"What would you do if you got it?",
	"If you got it, then what would you do?"],

	// /(.*) mother (.*)/
	["Tell me more about your mother.",
	"What was your relationship with your mother like?",
	"How do you feel about your mother?",
	"How does this relate to your feelings today?",
	"Good family relations are important."],

	// /(.*) father (.*)/
	["Tell me more about your father.",
	"How did your father make you feel?",
	"How do you feel about your father?",
	"Does your relationship with your father relate to your feelings today?",
	"Do you have trouble showing affection with your family?"],

	// /(.*) child (.*)/
	["Did you have close friends as a child?",
	"What is your favorite childhood memory?",
	"Do you remember any dreams or nightmares from childhood?",
	"Did the other children sometimes tease you?",
	"How do you think your childhood experiences relate to your feelings today?"],

	// /(Bye|Good Bye)/
	["Thank you for talking with me.",
	"Good-bye.",
	"Thank you, My database has been updated!"]
];

// Store english answers for anything;
EnglishAnythingAnswers = [
	// /(.*)\?/
	["Why do you ask that?",
	"Please consider whether you can answer your own question.",
	"Perhaps the answer lies within yourself?",
	"Why don't you tell me?"],

	// /(.*)/
	["Please tell me more.",
	"Let's change the focus a bit... Tell me about your family.",
	"Can you elaborate on that?",
	"Why do you say that?",
	"I see.",
	"Very interesting.",
	"I see.  And what does that tell you?",
	"How does that make you feel?",
	"How do you feel when you say that?",
	"Sorry, this is not in my database"]
]

// Store portuguese answers;
PortugueseAnswers = [
	// /Eu preciso (.*)/
	["Porque vocÊ precisa disso?",
	"Isso poderia te ajudar?",
	"Tem certeza que precisa disso?"],

	// /(Pq|Porque) (vc|voce|você) (n|nao|não) (.*)/
	["Você realmente pensa nisso?",
	"Por acaso, você poderá fazer isso?",
	"Você que que eu faça?"],

	// /(Pq|Porque) eu (n|nao|não) posso (.*)/
	["Você acha que pode fazer isso?",
	"Se você pudesse, O que faria?",
	"Eu não sei.. por que você não pode?",
	"Você tentou?"],

	// /Eu (n|nao|não) posso (.*)/
	["Como você sabe que não pode?",
	"Se você tivesse tentado teria conseguido. Não?",
	"O que isso tiraria de você?"],

	// /Eu sou (.*)/
	["Você veio até mim para isso?",
	"A quanto tempo você está desse jeito?",
	"Como se sente desse jeito?",
	"O que você sente sendo desse jeito?",
	"Você gosta de ser desse jeito?",
	"Porque você me diz que é assim?",
	"Porque você acha que é assim?"],

	// /(vc|voce|você) (e|é|eh) (.*)/
	["Porque isso importa?",
	"Você preferia ser ou não?",
	"Você acredita nisso?",
	"Posso ser.. o que acha?",
	"Porque acha que sou isso?",
	"Por favor, Porque acha que sou isso?",
	"Você gostaria que eu fosse isso.",
	"Está falando sobre você mesmo?",
	"Porque diz que sou isso?",
	"Porque acha que sou isso?",
	"Está falando sobre você ou eu?"],

	// /(oq|o que|o quê) (.*)/
	["Porque pergunta?",
	"Como a resposta iria te ajudar?",
	"O que acha?"],

	// /Como (.*)/
	["O que supõe?",
	"Você pode responder sua própria pergunta.",
	"O que você está realmente perguntando?"],

	// /(Pq|Porque) (.*)/
	["Isto é uma razão real?",
	"Quais outras razões vem a sua mente?",
	"Esta razão se aplica a outra coisa?",
	"Se fosse, o que mais poderia ser verdade?"],

	// /(.*) desculpa (.*)/
	["Existem muitas vezes em que desculpas são necessárias...",
	"O que sente quando se desculpa?"],

	// /(Oi|oii|olá|iae|iai)(.*)/
	["Oi... Que bom que você veio.",
	"Oie... como está?",
	"Olá, como foi seu dia?"],

	// /Eu acho (.*)/
	["Você duvida?",
	"Você realmente acha?",
	"Mas você tem certeza?"],

	// /(.*) amig(o|a) (.*)/
	["Me diga mais sobre seus amigos.",
	"Quando você pensa em um amigo, o que vem a sua mente?",
	"Me conte sobre um amigo de infância?"],

	// /Sim/
	["Você tem bastante certeza.",
	"OK, mas você pode elaborar mais?"],

	// /(.*) computador(.*)/
	["Você está realmente falado de mim?",
	"Parece estranho falar com um computador?",
	"Como computadores te fazem sentir?",
	"Você fica sem jeito com computadores?"],

	// /(Isto|isso) (e|é|eh) (.*)/
	["Você acha que é?",
	"Pode ser verdade, o que acha?",
	"Se fosse, o que faria?",
	"Isso poderia ser.",
	"Você Parece ter bastante certeza.",
	"Se eu dissesse que não é, como se sentiria?"],

	// /(vc|voce|você) pode (.*)/
	["O que te faz achar que eu não posso?",
	"Se eu pudesse, o que mais?",
	"O que acha que eu posso?"],

	// /Eu posso (.*)/
	["Você não quer?",
	"Você quer poder fazer isso?",
	"Se você pudesse, faria"],

	// /Eu (n|nao|não) (.*)/
	["Você não?",
	"Porque não?",
	"Você quer poder fazer?"],

	// /Eu sinto (.*)/
	["bom, me diga mais sobre seus sentimentos.",
	"Você semrpe sente isso?",
	"Quando você sente isso?",
	"Quando você se sente assim, o que faz?"],

	// /Eu tenho (.*)/
	["Porque me diz isso?",
	"Você tem mesmo?",
	"Agora que tem isso, o que faria depois?"],

	// /Eu posso (.*)/
	["Pode explicar?",
	"Porque poderia?",
	"Quem mais sabe que você pode?"],

	// /(Lá|la) (.*)/
	["O que acah sobre lá?",
	"É como se la fosse.",
	"gostaria que lá fosse?"],

	// /meu (.*)/
	["Eu vejo.",
	"Prque diz isso?",
	"Como se sente?"],

	// /(vc|voce|você) (.*)/
	["Deveríamos estar falando sobre você, não eu.",
	"O que diz sobre mim?",
	"Porque se importa?"],

	// /(Pq|Porque) (.*)/
	["Porque não me diz a razão?",
	"Porque pensa isso?" ],

	// /Eu quero (.*)/
	["O que significaria pra você se tivesse?",
	"Porque quer isso?",
	"O que faria se tivesse isso?",
	"Se você tivesse, o que faria?"],

	// /(.*) (Mãe|mae) (.*)/
	["Me diga mais sobre sua mãe.",
	"Como é sua relação com sua mãe?",
	"Como se sente sobre sua mãe?",
	"Como isto lhe faz sentir?",
	"Boas relações com a família são importantes."],

	// /(.*) pai (.*)/
	["Me diga mais sobre seu pai.",
	"Como seu pai te faz sentir?",
	"Como se sente sobre seu pai",
	"Sua relação com seu pai, é o motivo de como se sente hoje?",
	"Você tem dificuldade de relacionar com sua família?"],

	// /(.*) (criança|crianca) (.*)/
	["Você tem amigos mais novos?",
	"Qual sua memória favorita da infância?",
	"Você se lembra de sonhos ou pesadelos da infância?",
	"Como as outras crianças te tratam?",
	"Como suas experiências da infância trazem consequências hoje?"],

	// /(Tchau|xau|valeu|vlw)/
	["Obrigado por conversar.",
	"Xau ^^.",
	"Obrigado, Meu sistema foi atualizado!"]
];

// Store portuguese answers for anything;
PortugueseAnythingAnswers = [
	// /(.*)\?/
	["Porque pergunta isso?",
	"Considere que possa responder a sua própria pergunta.",
	"Isso implica com sua vida?",
	"Porque não me diz algo que tenha no meu banco de dados?"],

	// /(.*)/
	["Me conte mais.",
	"Vamos mudar o foco... Me conte sobre sua família.",
	"Pode elaborar mais?",
	"Porque diz isso?",
	"Eu vejo.",
	"Muito interessante.",
	"Eu vejo. O que diz sobre?",
	"Como isto faz você se sentir?",
	"Como se sente quando diz isso?",
	"Desculpa, isso não está no meu banco de dados"]
]