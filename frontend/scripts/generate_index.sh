#!/bin/bash
# Go to the root of the proect
cd "$(dirname "$0")/../.."

# Generate some html
echo "<html><head><title>Coverage Reports</title></head><body>" > index.html
echo "<h1>Coverage Reports</h1><ul>" >> index.html

# Read the last 20 lines from report_history.txt
tail -20 report_history.txt | while read report; do
    echo "<li><a href='coverage_reports/$report/index.html'>$report</a></li>" >> index.html
done

echo "</ul></body></html>" >> index.html

mv index.html coverage_reports/
