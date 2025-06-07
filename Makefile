
.PHONY: clean
clean:
	@rm -rf _site 2> /dev/null

.PHONY: setup
setup:
	@bundle install

.PHONY: lint
lint:
	@bundle exec mdl .

.PHONY: serve
serve:
	@bundle exec jekyll serve

.PHONY: build
build:
	@bundle exec jekyll build
