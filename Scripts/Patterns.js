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

// English patterns;
EnglishPatterns = [
	/I need (.*)/i,
	/Because you don't (.*)/i,
	/Because I can't (.*)/i,
	/I can't (.*)/i,
	/I am (.*)/i,
	/You are (.*)/i,
	/What (.*)/i,
	/How (.*)/i,
	/Because (.*)/i,
	/(.*) sorry (.*)/i,
	/(Hi|Hello)(.*)/i,
	/I think (.*)/i,
	/(.*) friend (.*)/i,
	/Yes/i,
	/(.*) computer(.*)/i,
	/This is (.*)/i,
	/You can (.*)/i,
	/I can (.*)/i,
	/I don't (.*)/i,
	/I feel (.*)/i,
	/I have (.*)/i,
	/I can (.*)/i,
	/There (.*)/i,
	/Mine (.*)/i,
	/You (.*)/i,
	/Because (.*)/i,
	/I want (.*)/i,
	/(.*) mother (.*)/i,
	/(.*) father (.*)/i,
	/(.*) child (.*)/i,
	/(Bye|Good Bye)/i
];

// Portuguese patterns;
PortuguesePatterns = [
	/Eu preciso (.*)/i,
	/(Pq|Porque) (vc|voce|você) (n|nao|não) (.*)/i,
	/(Pq|Porque) eu (n|nao|não) posso (.*)/i,
	/Eu (n|nao|não) posso (.*)/i,
	/Eu sou (.*)/i,
	/(vc|voce|você) (e|é|eh) (.*)/i,
	/(oq|o que|o quê) (.*)/i,
	/Como (.*)/i,
	/(Pq|Porque) (.*)/i,
	/(.*) desculpa (.*)/i,
	/(Oi|oii|olá|iae|iai)(.*)/i,
	/Eu acho (.*)/i,
	/(.*) amig(o|a) (.*)/i,
	/Sim/i,
	/(.*) computador(.*)/i,
	/(Isto|isso) (e|é|eh) (.*)/i,
	/(vc|voce|você) pode (.*)/i,
	/Eu posso (.*)/i,
	/Eu (n|nao|não) (.*)/i,
	/Eu sinto (.*)/i,
	/Eu tenho (.*)/i,
	/Eu posso (.*)/i,
	/(Lá|la) (.*)/i,
	/meu (.*)/i,
	/(vc|voce|você) (.*)/i,
	/(Pq|Porque) (.*)/i,
	/Eu quero (.*)/i,
	/(.*) (Mãe|mae) (.*)/i,
	/(.*) pai (.*)/i,
	/(.*) (criança|crianca) (.*)/i,
	/(Tchau|xau|valeu|vlw)/i
];

// Patterns for anything;
AnythingPatterns = [
	/(.*)\?/i,
	/(.*)/i
]
