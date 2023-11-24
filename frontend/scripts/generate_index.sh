#!/bin/bash
# Go to the root of the proect
cd "$(dirname "$0")/../.."

echo "<html><head><title>Coverage Reports</title></head><body>" > index.html
echo "<h1>Coverage Reports</h1><ul>" >> index.html

ls -1 coverage_reports/ | sort -r | head -20 | while read report; do
    echo "<li><a href='coverage_reports/$report/index.html'>$report</a></li>" >> index.html
done

echo "</ul></body></html>" >> index.html

mv index.html coverage_reports/
