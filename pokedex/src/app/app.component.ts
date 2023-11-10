import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokédex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/perfil.png";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[] = [
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasceu. A semente cresce lentamente.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',  'https://i.pinimg.com/originals/95/10/65/95106559a6799e5d0017e300fc8f276f.gif', 'Overgrow', 0.7, 6.9),
    new Pokemon(1, 'Ivysaur', ['Grama', 'Veneno'], 'Quando o bulbo em suas costas cresce, ele parece perder a capacidade de ficar em pé sobre as patas traseiras.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',  'https://i.pinimg.com/originals/95/10/65/95106559a6799e5d0017e300fc8f276f.gif', 'Overgrow', 1, 13),
    new Pokemon(2, 'Venusaur', ['Grama', 'Veneno'], 'Sua planta floresce quando absorve energia solar. Ele permanece em movimento em busca da luz solar.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',  'https://i.pinimg.com/originals/95/10/65/95106559a6799e5d0017e300fc8f276f.gif', 'Overgrow', 2, 100),
    new Pokemon(1, 'Charmander', ['Fogo'], 'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor sai da ponta da cauda.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',  'https://pm1.aminoapps.com/6309/f42dcc64b7b19e63402010c145b4e34a552f1f47_00.jpg', 'Blaze', 0.6, 8.5),
    new Pokemon(2, 'Charmeleon', ['Fogo'], 'Tem uma natureza bárbara. Na batalha, ele gira sua cauda de fogo e corta com garras afiadas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',  'https://pm1.aminoapps.com/6309/f42dcc64b7b19e63402010c145b4e34a552f1f47_00.jpg', 'Blaze', 1.1, 19),
    new Pokemon(1, 'Charizard', ['Fogo', 'Voador'], 'Diz-se que o fogo de Charizard queima mais se ele tiver passado por duras batalhas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',  'https://pm1.aminoapps.com/6309/f42dcc64b7b19e63402010c145b4e34a552f1f47_00.jpg', 'Blaze', 1.7, 90.5),
    new Pokemon(2, 'Squirtle', ['Água'], 'Quando retrai o longo pescoço para dentro da concha, ele esguicha água com força vigorosa.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',  'https://pm1.aminoapps.com/6490/c1d89a4c1a3d718f5f0b15faad8c640c567a8cee_00.jpg', 'Torrent', 0.5, 9),
    new Pokemon(1, 'Wartortle', ['Água'], 'É reconhecido como um símbolo de longevidade. Se sua concha contiver algas, esse Wartortle é muito antigo.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',  'https://pm1.aminoapps.com/6490/c1d89a4c1a3d718f5f0b15faad8c640c567a8cee_00.jpg', 'Torrent', 1, 22.5),
    new Pokemon(2, 'Blastoise', ['Água'], 'Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em caso de emergência, ele se retirará para dentro de sua concha.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',  'https://pm1.aminoapps.com/6490/c1d89a4c1a3d718f5f0b15faad8c640c567a8cee_00.jpg', 'Torrent', 1.6, 85.5),
    new Pokemon(1, 'Caterpie', ['Inseto'], 'Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution004-copy.gif', 'Shield Dust', 0.3, 2.9),
    new Pokemon(2, 'Metapod', ['Inseto'], 'Está esperando o momento de evoluir. Nesta fase, ele só pode endurecer, por isso permanece imóvel para evitar ataques.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution004-copy.gif', 'Shed Skin', 0.7, 9.9),
    new Pokemon(1, 'Butterfree', ['Inseto', 'Voador'], 'Ele adora o néctar das flores e pode localizar manchas de flores que contenham até mesmo pequenas quantidades de pólen.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution004-copy.gif', 'Compound Eyes', 1.1, 32),
    new Pokemon(2, 'Weedle', ['Inseto', 'Veneno'], 'Cuidado com o ferrão afiado em sua cabeça. Esconde-se na grama e nos arbustos onde come folhas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution005-copy.gif', 'Shield Dust', 0.3, 3.2),
    new Pokemon(1, 'Kakuna', ['Inseto', 'Voador'], 'Capaz de se mover apenas ligeiramente. Quando ameaçado, pode esticar o ferrão e envenenar o inimigo.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution005-copy.gif', 'Shed Skin', 0.6, 10),
    new Pokemon(2, 'Beedrill', ['Inseto', 'Veneno'], 'Possui três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para atacar repetidamente o inimigo.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution005-copy.gif', 'Swarm', 1, 29.5),
    new Pokemon(1, 'Pidgey', ['Normal', 'Voador'], 'Muito dócil. Se for atacado, muitas vezes levanta areia para se proteger, em vez de revidar.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',  'https://i.pinimg.com/564x/41/67/04/416704a22747293c2e1a8d7c06d61f7d.jpg', 'Keen Eye, Tangled Feet', 0.3, 1.8),
    new Pokemon(2, 'Pidgeotto', ['Normal', 'Veneno'], 'Este Pokémon está cheio de vitalidade. Ele voa constantemente pelo seu grande território em busca de presas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',  'https://i.pinimg.com/564x/41/67/04/416704a22747293c2e1a8d7c06d61f7d.jpg', 'Keen Eye, Tangled Feet', 1.1, 30),
    new Pokemon(1, 'Pidgeot', ['Normal', 'Voador'], 'Este Pokémon voa na velocidade Mach 2 em busca de presas. Suas grandes garras são temidas como armas malignas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',  'https://i.pinimg.com/564x/41/67/04/416704a22747293c2e1a8d7c06d61f7d.jpg', 'Keen Eye, Tangled Feet', 1.5, 39.5),
    new Pokemon(2, 'Rattata', ['Normal'], 'Mastigará qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution007-copy.gif', 'Run Away, Guts', 0.3, 3.5),
    new Pokemon(1, 'Raticate', ['Normal'], 'Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution007-copy.gif', 'Run Away, Guts', 0.7, 18.5),
    new Pokemon(2, 'Spearow', ['Normal', 'Voador'], 'Inepto em voar alto. No entanto, pode voar muito rápido para proteger o seu território.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',  'https://i.pinimg.com/originals/1a/a2/c9/1aa2c925546919ecdd59bbb896d246e3.gif', 'Keen Eye', 0.3, 2),
    new Pokemon(1, 'Fearow', ['Normal', 'Voador'], 'Um Pokémon que remonta a muitos anos. Se sentir perigo, ele voa alto e para longe, instantaneamente.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',  'https://i.pinimg.com/originals/1a/a2/c9/1aa2c925546919ecdd59bbb896d246e3.gif', 'Keen Eye', 1.2, 38),
    new Pokemon(1, 'Ekans ', ['Veneno'], 'Quanto mais velho fica, mais cresce. À noite, ele envolve seu longo corpo em galhos de árvores para descansar.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution009-copy.gif', 'Shed Skin, Intimidate', 2, 6.9),
    new Pokemon(2, 'Arbok', ['Veneno'], 'Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',  'https://midorihoshi.files.wordpress.com/2008/08/evolution009-copy.gif', 'Shed Skin, Intimidate', 3.5, 65),
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Quando está irritado, descarrega imediatamente a energia armazenada nas bolsas em suas bochechas.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'https://midorihoshi.files.wordpress.com/2008/08/evolution010-copy.gif', 'Static', 0.4, 6),
  ];

  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  closeModal() {
    this.selectedPokemon = undefined;
  }

  filterValue: string = '';
  filteredPokemon(): Pokemon[] {
    if (!this.filterValue) {
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }
}