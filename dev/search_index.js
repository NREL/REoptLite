var documenterSearchIndex = {"docs":
[{"location":"usage/examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"usage/examples/","page":"Examples","title":"Examples","text":"To use REopt Lite you will need to have a solver installed. REoptLite.jl has been tested with Xpress, Cbc, and CPLEX solvers, but it should work with other Linear Progam solvers (for PV and Storage scenarios) or Mixed Integer Linear Program solvers (for scenarios with outages and/or Generators).","category":"page"},{"location":"usage/examples/#Basic","page":"Examples","title":"Basic","text":"","category":"section"},{"location":"usage/examples/","page":"Examples","title":"Examples","text":"using Xpress\nusing JuMP\nusing REoptLite\n\nm = Model(Xpress.Optimizer)\nresults = run_reopt(m, \"path/to/scenario.json\")","category":"page"},{"location":"usage/examples/","page":"Examples","title":"Examples","text":"The results is a Dict.","category":"page"},{"location":"usage/examples/","page":"Examples","title":"Examples","text":"For more on the scenario.json see the Inputs section.","category":"page"},{"location":"#REoptLite.jl","page":"Home","title":"REoptLite.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Renewable Energy Optimization and Integration","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Note\nThis package is currently under development and not necessarily stable. It contains a subset of the REopt Lite API capabilities.","category":"page"},{"location":"","page":"Home","title":"Home","text":"build_reopt!(m::JuMP.AbstractModel, fp::String)\nScenario(d::Dict)","category":"page"},{"location":"#REoptLite.build_reopt!-Tuple{AbstractModel,String}","page":"Home","title":"REoptLite.build_reopt!","text":"build_reopt!(m::JuMP.AbstractModel, fp::String)\n\nAdd variables and constraints for REopt model.  fp is used to load in JSON file to construct REoptInputs.\n\n\n\n\n\n","category":"method"},{"location":"#REoptLite.Scenario-Tuple{Dict}","page":"Home","title":"REoptLite.Scenario","text":"Scenario(d::Dict)\n\nConstructor for Scenario struct, where d has upper-case keys:\n\nSite (required)\nElectricTariff (required)\nElectricLoad (required)\nPV (optional, can be Array)\nStorage (optional)\nElectricUtility (optional)\nFinancial (optional)\nGenerator (optional)\n\nAll values of d are expected to Dicts except for PV, which can be either a Dict or Dict[].\n\nstruct Scenario\n    site::Site\n    pvs::Array{PV, 1}\n    storage::Storage\n    electric_tariff::ElectricTariff\n    electric_load::ElectricLoad\n    electric_utility::ElectricUtility\n    financial::Financial\n    generator::Generator\nend\n\n\n\n\n\n","category":"method"},{"location":"usage/inputs/#Inputs","page":"Inputs","title":"Inputs","text":"","category":"section"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"Inputs to run_reopt can be provided in one of three format:","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"a file path (string) to a JSON file,\na Dict, or\nusing the REoptInputs struct","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"The first option is perhaps the most straightforward one. For example, the minimum requirements for a JSON scenario file would look like:","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"{\n    \"Site\": {\n        \"longitude\": -118.1164613,\n        \"latitude\": 34.5794343\n    },\n    \"ElectricLoad\": {\n        \"doe_reference_name\": \"MidriseApartment\",\n        \"annual_kwh\": 1000000.0,\n        \"city\": \"Boulder\"\n    },\n    \"ElectricTariff\": {\n        \"urdb_label\": \"5ed6c1a15457a3367add15ae\"\n    }\n}","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"The order of the keys do not matter. Note that this scenario does not include any energy generation technologies and therefore the results can be used as a baseline for comparison to scenarios that result in cost-optimal generation technologies.","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"To add PV to the analysis simply add a PV key with an empty dictionary (to use default values):","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"{\n    \"Site\": {\n        \"longitude\": -118.1164613,\n        \"latitude\": 34.5794343\n    },\n    \"ElectricLoad\": {\n        \"doe_reference_name\": \"MidriseApartment\",\n        \"annual_kwh\": 1000000.0,\n        \"city\": \"Boulder\"\n    },\n    \"ElectricTariff\": {\n        \"urdb_label\": \"5ed6c1a15457a3367add15ae\"\n    },\n    \"PV\": {}\n}","category":"page"},{"location":"usage/inputs/","page":"Inputs","title":"Inputs","text":"This scenario will consider the option to purchase a solar PV system to reduce energy costs, and if solar PV can reduce the energy costs then REopt Lite will provide the optimal PV capacity (assuming perfect foresight!).","category":"page"}]
}
