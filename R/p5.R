
#' Create a `p5.js` htmlwidget.
#'
#' @description
#' `r lifecycle::badge('experimental')`
#'
#' Create a `p5.js` htmlwidget.
#'
#' @param code Either a file with JavaScript code or a string with JavaScript
#' @param width width
#' @param height height
#'
#' @return An `htmlwidget` containing the sketch
#' @export
#'
p5 <- function(code, width = NULL, height = NULL) {
  data <- if (file.exists(code)) {
    paste(
      readLines(code),
      collapse = "\n"
    )
  } else {
    code
  }
  x <- list(
    code = data
  )
  htmlwidgets::createWidget("p5", x, width = width, height = height, package = "p5.js")
}