
.PHONY: clean pre-check-in
make pre-check-in: clean
clean:
	@rm -rf _site 2> /dev/null

.PHONY: setup
setup:
	@bundle install

.PHONY: lint
lint:
	@bundle exec mdl --rules=~MD002 .

.PHONY: serve
serve:
	@bundle exec jekyll serve

.PHONY: build
build:
	@bundle exec jekyll build
