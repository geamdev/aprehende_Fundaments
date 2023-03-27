#Métodos de un string, nos permiten modificar, acceder, eliminar, etc al contenido de un string retornando uno nuevo.
#capitalize
string = "hola mundo"
print(f"String: {string}")
print(f"capitalize: {string.capitalize()}")
#casefold
string = "HoLa mUnDO"
print(f"String: {string}")
print(f"casefold: {string.casefold()}")
#center
string = "hola mundo"
print(f"String: {string}")
print(f"center: {string.center(40)}")
#count
string = "hola mundo"
print(f"String: {string}")
print(f"capitalize: {string.count('o')}")
#endswith
string = "hola mundo."
print(f"String: {string}")
print(f"endswith: {string.endswith('.')}")
#expandtabs
string = "hola\tmundo\tcruel."
print(f"String: {string}")
print(f"expandtabs: {string.expandtabs(20)}")
#find
string = "hola mundo en llamas"
print(f"String: {string}")
print(f"find: {string.find('cruel')}")
#index
string = "hola mundo en llamas"
print(f"String: {string}")
print(f"index: {string.index('en')}")
#join
lista = ["José", "Pedro", "Ana", "Doménica"]
print(f"lista: {lista}")
print(f"join: {'-/-'.join(lista)}")
#lower
string = "HOLA MUNDO"
print(f"String: {string}")
print(f"lower: {string.lower()}")
#replace
string = "hola mundo"
print(f"String: {string}")
print(f"replace: {string.replace('hola', 'chao')}")
#split
string = "hola mundo cruel en llamas"
print(f"String: {string}")
print(f"split: {string.split()}")
#splitlines
string = "Hola mundo\nChao mundo\nLo siento mundo :C"
print(f"String: {string}")
print(f"splitlines: {string.splitlines()}")
#startswith
string = "¡hola mundo!"
print(f"String: {string}")
print(f"startswith: {string.startswith('¡')}")
#strip
string = "    hola mundo    "
print(f"String: {string}")
print(f"strip: {string.strip()}")
#swapcase
string = "Hola Mundo"
print(f"String: {string}")
print(f"swapcase: {string.swapcase()}")
#title
string = "hola mundo"
print(f"String: {string}")
print(f"title: {string.title()}")
#upper
string = "hola mundo"
print(f"String: {string}")
print(f"upper: {string.upper()}")