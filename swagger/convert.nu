# npx swagger-typescript-api -p ./TMF620-Product_Catalog_Management-v5.0.0.json -o ./src -n myApi.ts


const defaultSwaggerPath = "swagger"
const defaultEntitesPath = "entities"
const tmfVersionPath = "tmf-version.yaml"
def "main swagger" [] {


    mut version = (open $tmfVersionPath | get version)

    echo $version | each {|it| mkdir  (echo $defaultSwaggerPath | path join $defaultEntitesPath |path join $it)}
    let ffs = (ls $defaultSwaggerPath |  where name =~ ".json|.yaml|.yml"|  get name )
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
        (npx swagger-typescript-api -p $f -o (echo $defaultEntitesVersionPath | path dirname) -n (echo $pathEntity | get stem | append ".ts" | str join ''))
    }
}
# https://www.nushell.sh/book/scripts.html#subcommands
def main [] {}

