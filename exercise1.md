The Application that my team and I are working on is written in [Go](https://go.dev)

#### Tools for *Linting*, *Testing* and *Building*

Go apps can be easily build using the Go CLI `go build`.
Go also has an built-in testing framework can which run with the `go test` command, and the test files should be suffixed with `_test.go`.
Linting of Go code can be done using the `gopls` LSP while using the IDE or using [golangci-lint](https://golangci-lint.run/) during CI

#### Alternatives to Jenkins and Github Actions for CI

Alternatives include [TeamCity by Jetbrains](https://www.jetbrains.com/teamcity/), [CircleCI](https://circleci.com/), [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)  (if one is hosting their repository on GitLab)

#### Self-hosted or cloud-based?

Given the compact size of Go applications, a cloud-based CI solution is convenient because it eliminates the need for self-hosted infrastructure.