# npx swagger-typescript-api -p ./TMF620-Product_Catalog_Management-v5.0.0.json -o ./src -n myApi.ts

const version = [
    "v4.1",
    "v4.0",
    "v5.0"
]
const defaultSwaggerPath = "swagger"
const defaultEntitesPath = "entities"
def "main swagger" [] {


    echo $version | each {|it| mkdir  (echo $defaultSwaggerPath | path join $defaultEntitesPath |path join $it)}
    let ffs = (ls $defaultSwaggerPath |  where name =~ ".json|.yaml"|  get name )
    echo $ffs
    for f in $ffs {
        mut defaultEntitesVersionPath = $f
        let pathEntity = (echo $f | path parse)
        for it in $version {
            if ($pathEntity | get stem | str contains $it) {
                $defaultEntitesVersionPath = (
                    echo ($pathEntity | get parent)| path join $defaultEntitesPath | path join $it | path join ($pathEntity | get stem)
                )
                break
            }
        }
        echo $defaultEntitesVersionPath
        # let swaggerPath = (echo $defaultEntitesVersionPath | path parse)
        # echo $defaultEntitesVersionPath
        # echo (echo $defaultSwaggerPath | path join $defaultEntitesPath)
        # echo ( ($swaggerPath | get parent) | path join ($swaggerPath | get stem | append ".ts" | str join ''))
        (npx swagger-typescript-api -p $f -o (echo $defaultEntitesVersionPath | path dirname) -n (echo $pathEntity | get stem | append ".ts" | str join ''))
    }
}
# https://www.nushell.sh/book/scripts.html#subcommands
def main [] {}

