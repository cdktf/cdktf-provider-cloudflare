# `dataCloudflarePageShieldScriptsList` Submodule <a name="`dataCloudflarePageShieldScriptsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldScriptsList <a name="DataCloudflarePageShieldScriptsList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsList;

DataCloudflarePageShieldScriptsList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .direction(java.lang.String)
//  .excludeCdnCgi(java.lang.Boolean)
//  .excludeCdnCgi(IResolvable)
//  .excludeDuplicates(java.lang.Boolean)
//  .excludeDuplicates(IResolvable)
//  .excludeUrls(java.lang.String)
//  .export(java.lang.String)
//  .hosts(java.lang.String)
//  .maxItems(java.lang.Number)
//  .orderBy(java.lang.String)
//  .page(java.lang.String)
//  .pageUrl(java.lang.String)
//  .perPage(java.lang.Number)
//  .prioritizeMalicious(java.lang.Boolean)
//  .prioritizeMalicious(IResolvable)
//  .status(java.lang.String)
//  .urls(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The direction used to sort returned scripts. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.excludeCdnCgi">excludeCdnCgi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.excludeDuplicates">excludeDuplicates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, excludes duplicate scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.excludeUrls">excludeUrls</a></code> | <code>java.lang.String</code> | Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.export">export</a></code> | <code>java.lang.String</code> | Export the list of scripts as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.hosts">hosts</a></code> | <code>java.lang.String</code> | Includes scripts that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The field used to sort returned scripts. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.page">page</a></code> | <code>java.lang.String</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | Includes scripts that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.perPage">perPage</a></code> | <code>java.lang.Number</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.prioritizeMalicious">prioritizeMalicious</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, malicious scripts appear first in the returned scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Filters the returned scripts using a comma-separated list of scripts statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.urls">urls</a></code> | <code>java.lang.String</code> | Includes scripts whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#zone_id DataCloudflarePageShieldScriptsList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The direction used to sort returned scripts. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#direction DataCloudflarePageShieldScriptsList#direction}

---

##### `excludeCdnCgi`<sup>Optional</sup> <a name="excludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.excludeCdnCgi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#exclude_cdn_cgi DataCloudflarePageShieldScriptsList#exclude_cdn_cgi}

---

##### `excludeDuplicates`<sup>Optional</sup> <a name="excludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.excludeDuplicates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, excludes duplicate scripts.

We consider a script duplicate of another if their javascript
content matches and they share the same url host and zone hostname. In such case, we return the most
recent script for the URL host and zone hostname combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#exclude_duplicates DataCloudflarePageShieldScriptsList#exclude_duplicates}

---

##### `excludeUrls`<sup>Optional</sup> <a name="excludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.excludeUrls"></a>

- *Type:* java.lang.String

Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#exclude_urls DataCloudflarePageShieldScriptsList#exclude_urls}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.export"></a>

- *Type:* java.lang.String

Export the list of scripts as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#export DataCloudflarePageShieldScriptsList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.hosts"></a>

- *Type:* java.lang.String

Includes scripts that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#hosts DataCloudflarePageShieldScriptsList#hosts}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#max_items DataCloudflarePageShieldScriptsList#max_items}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

The field used to sort returned scripts. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#order_by DataCloudflarePageShieldScriptsList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.page"></a>

- *Type:* java.lang.String

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the scripts
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of scripts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#page DataCloudflarePageShieldScriptsList#page}

---

##### `pageUrl`<sup>Optional</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.pageUrl"></a>

- *Type:* java.lang.String

Includes scripts that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#page_url DataCloudflarePageShieldScriptsList#page_url}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.perPage"></a>

- *Type:* java.lang.Number

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#per_page DataCloudflarePageShieldScriptsList#per_page}

---

##### `prioritizeMalicious`<sup>Optional</sup> <a name="prioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.prioritizeMalicious"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, malicious scripts appear first in the returned scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#prioritize_malicious DataCloudflarePageShieldScriptsList#prioritize_malicious}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Filters the returned scripts using a comma-separated list of scripts statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#status DataCloudflarePageShieldScriptsList#status}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.urls"></a>

- *Type:* java.lang.String

Includes scripts whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#urls DataCloudflarePageShieldScriptsList#urls}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeCdnCgi">resetExcludeCdnCgi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeDuplicates">resetExcludeDuplicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeUrls">resetExcludeUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExport">resetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPageUrl">resetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPrioritizeMalicious">resetPrioritizeMalicious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetUrls">resetUrls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetExcludeCdnCgi` <a name="resetExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeCdnCgi"></a>

```java
public void resetExcludeCdnCgi()
```

##### `resetExcludeDuplicates` <a name="resetExcludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeDuplicates"></a>

```java
public void resetExcludeDuplicates()
```

##### `resetExcludeUrls` <a name="resetExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeUrls"></a>

```java
public void resetExcludeUrls()
```

##### `resetExport` <a name="resetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExport"></a>

```java
public void resetExport()
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPage"></a>

```java
public void resetPage()
```

##### `resetPageUrl` <a name="resetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPageUrl"></a>

```java
public void resetPageUrl()
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPerPage"></a>

```java
public void resetPerPage()
```

##### `resetPrioritizeMalicious` <a name="resetPrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPrioritizeMalicious"></a>

```java
public void resetPrioritizeMalicious()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUrls` <a name="resetUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetUrls"></a>

```java
public void resetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsList;

DataCloudflarePageShieldScriptsList.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsList;

DataCloudflarePageShieldScriptsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsList;

DataCloudflarePageShieldScriptsList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsList;

DataCloudflarePageShieldScriptsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflarePageShieldScriptsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflarePageShieldScriptsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflarePageShieldScriptsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldScriptsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList">DataCloudflarePageShieldScriptsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgiInput">excludeCdnCgiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicatesInput">excludeDuplicatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrlsInput">excludeUrlsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.exportInput">exportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hostsInput">hostsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageInput">pageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrlInput">pageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPageInput">perPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMaliciousInput">prioritizeMaliciousInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urlsInput">urlsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgi">excludeCdnCgi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicates">excludeDuplicates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrls">excludeUrls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.export">export</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hosts">hosts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.page">page</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMalicious">prioritizeMalicious</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urls">urls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.result"></a>

```java
public DataCloudflarePageShieldScriptsListResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList">DataCloudflarePageShieldScriptsListResultList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `excludeCdnCgiInput`<sup>Optional</sup> <a name="excludeCdnCgiInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgiInput"></a>

```java
public java.lang.Object getExcludeCdnCgiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeDuplicatesInput`<sup>Optional</sup> <a name="excludeDuplicatesInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicatesInput"></a>

```java
public java.lang.Object getExcludeDuplicatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeUrlsInput`<sup>Optional</sup> <a name="excludeUrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrlsInput"></a>

```java
public java.lang.String getExcludeUrlsInput();
```

- *Type:* java.lang.String

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.exportInput"></a>

```java
public java.lang.String getExportInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hostsInput"></a>

```java
public java.lang.String getHostsInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageInput"></a>

```java
public java.lang.String getPageInput();
```

- *Type:* java.lang.String

---

##### `pageUrlInput`<sup>Optional</sup> <a name="pageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrlInput"></a>

```java
public java.lang.String getPageUrlInput();
```

- *Type:* java.lang.String

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPageInput"></a>

```java
public java.lang.Number getPerPageInput();
```

- *Type:* java.lang.Number

---

##### `prioritizeMaliciousInput`<sup>Optional</sup> <a name="prioritizeMaliciousInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMaliciousInput"></a>

```java
public java.lang.Object getPrioritizeMaliciousInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urlsInput"></a>

```java
public java.lang.String getUrlsInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `excludeCdnCgi`<sup>Required</sup> <a name="excludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgi"></a>

```java
public java.lang.Object getExcludeCdnCgi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeDuplicates`<sup>Required</sup> <a name="excludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicates"></a>

```java
public java.lang.Object getExcludeDuplicates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeUrls`<sup>Required</sup> <a name="excludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrls"></a>

```java
public java.lang.String getExcludeUrls();
```

- *Type:* java.lang.String

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.export"></a>

```java
public java.lang.String getExport();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hosts"></a>

```java
public java.lang.String getHosts();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

---

##### `pageUrl`<sup>Required</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrl"></a>

```java
public java.lang.String getPageUrl();
```

- *Type:* java.lang.String

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

---

##### `prioritizeMalicious`<sup>Required</sup> <a name="prioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMalicious"></a>

```java
public java.lang.Object getPrioritizeMalicious();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urls"></a>

```java
public java.lang.String getUrls();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldScriptsListConfig <a name="DataCloudflarePageShieldScriptsListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsListConfig;

DataCloudflarePageShieldScriptsListConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .direction(java.lang.String)
//  .excludeCdnCgi(java.lang.Boolean)
//  .excludeCdnCgi(IResolvable)
//  .excludeDuplicates(java.lang.Boolean)
//  .excludeDuplicates(IResolvable)
//  .excludeUrls(java.lang.String)
//  .export(java.lang.String)
//  .hosts(java.lang.String)
//  .maxItems(java.lang.Number)
//  .orderBy(java.lang.String)
//  .page(java.lang.String)
//  .pageUrl(java.lang.String)
//  .perPage(java.lang.Number)
//  .prioritizeMalicious(java.lang.Boolean)
//  .prioritizeMalicious(IResolvable)
//  .status(java.lang.String)
//  .urls(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction used to sort returned scripts. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeCdnCgi">excludeCdnCgi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeDuplicates">excludeDuplicates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, excludes duplicate scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeUrls">excludeUrls</a></code> | <code>java.lang.String</code> | Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.export">export</a></code> | <code>java.lang.String</code> | Export the list of scripts as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.hosts">hosts</a></code> | <code>java.lang.String</code> | Includes scripts that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The field used to sort returned scripts. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.page">page</a></code> | <code>java.lang.String</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | Includes scripts that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.prioritizeMalicious">prioritizeMalicious</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, malicious scripts appear first in the returned scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.status">status</a></code> | <code>java.lang.String</code> | Filters the returned scripts using a comma-separated list of scripts statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.urls">urls</a></code> | <code>java.lang.String</code> | Includes scripts whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#zone_id DataCloudflarePageShieldScriptsList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction used to sort returned scripts. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#direction DataCloudflarePageShieldScriptsList#direction}

---

##### `excludeCdnCgi`<sup>Optional</sup> <a name="excludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeCdnCgi"></a>

```java
public java.lang.Object getExcludeCdnCgi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#exclude_cdn_cgi DataCloudflarePageShieldScriptsList#exclude_cdn_cgi}

---

##### `excludeDuplicates`<sup>Optional</sup> <a name="excludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeDuplicates"></a>

```java
public java.lang.Object getExcludeDuplicates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, excludes duplicate scripts.

We consider a script duplicate of another if their javascript
content matches and they share the same url host and zone hostname. In such case, we return the most
recent script for the URL host and zone hostname combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#exclude_duplicates DataCloudflarePageShieldScriptsList#exclude_duplicates}

---

##### `excludeUrls`<sup>Optional</sup> <a name="excludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeUrls"></a>

```java
public java.lang.String getExcludeUrls();
```

- *Type:* java.lang.String

Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#exclude_urls DataCloudflarePageShieldScriptsList#exclude_urls}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.export"></a>

```java
public java.lang.String getExport();
```

- *Type:* java.lang.String

Export the list of scripts as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#export DataCloudflarePageShieldScriptsList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.hosts"></a>

```java
public java.lang.String getHosts();
```

- *Type:* java.lang.String

Includes scripts that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#hosts DataCloudflarePageShieldScriptsList#hosts}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#max_items DataCloudflarePageShieldScriptsList#max_items}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

The field used to sort returned scripts. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#order_by DataCloudflarePageShieldScriptsList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the scripts
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of scripts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#page DataCloudflarePageShieldScriptsList#page}

---

##### `pageUrl`<sup>Optional</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.pageUrl"></a>

```java
public java.lang.String getPageUrl();
```

- *Type:* java.lang.String

Includes scripts that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#page_url DataCloudflarePageShieldScriptsList#page_url}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#per_page DataCloudflarePageShieldScriptsList#per_page}

---

##### `prioritizeMalicious`<sup>Optional</sup> <a name="prioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.prioritizeMalicious"></a>

```java
public java.lang.Object getPrioritizeMalicious();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, malicious scripts appear first in the returned scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#prioritize_malicious DataCloudflarePageShieldScriptsList#prioritize_malicious}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Filters the returned scripts using a comma-separated list of scripts statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#status DataCloudflarePageShieldScriptsList#status}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.urls"></a>

```java
public java.lang.String getUrls();
```

- *Type:* java.lang.String

Includes scripts whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/page_shield_scripts_list#urls DataCloudflarePageShieldScriptsList#urls}

---

### DataCloudflarePageShieldScriptsListResult <a name="DataCloudflarePageShieldScriptsListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsListResult;

DataCloudflarePageShieldScriptsListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldScriptsListResultList <a name="DataCloudflarePageShieldScriptsListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsListResultList;

new DataCloudflarePageShieldScriptsListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get"></a>

```java
public DataCloudflarePageShieldScriptsListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflarePageShieldScriptsListResultOutputReference <a name="DataCloudflarePageShieldScriptsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_scripts_list.DataCloudflarePageShieldScriptsListResultOutputReference;

new DataCloudflarePageShieldScriptsListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.addedAt">addedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.cryptominingScore">cryptominingScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.dataflowScore">dataflowScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.domainReportedMalicious">domainReportedMalicious</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fetchedAt">fetchedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstPageUrl">firstPageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstSeenAt">firstSeenAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.jsIntegrityScore">jsIntegrityScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.lastSeenAt">lastSeenAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.magecartScore">magecartScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousDomainCategories">maliciousDomainCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousUrlCategories">maliciousUrlCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.malwareScore">malwareScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.obfuscationScore">obfuscationScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.pageUrls">pageUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlContainsCdnCgiPath">urlContainsCdnCgiPath</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlReportedMalicious">urlReportedMalicious</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult">DataCloudflarePageShieldScriptsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.addedAt"></a>

```java
public java.lang.String getAddedAt();
```

- *Type:* java.lang.String

---

##### `cryptominingScore`<sup>Required</sup> <a name="cryptominingScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.cryptominingScore"></a>

```java
public java.lang.Number getCryptominingScore();
```

- *Type:* java.lang.Number

---

##### `dataflowScore`<sup>Required</sup> <a name="dataflowScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.dataflowScore"></a>

```java
public java.lang.Number getDataflowScore();
```

- *Type:* java.lang.Number

---

##### `domainReportedMalicious`<sup>Required</sup> <a name="domainReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.domainReportedMalicious"></a>

```java
public IResolvable getDomainReportedMalicious();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fetchedAt`<sup>Required</sup> <a name="fetchedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fetchedAt"></a>

```java
public java.lang.String getFetchedAt();
```

- *Type:* java.lang.String

---

##### `firstPageUrl`<sup>Required</sup> <a name="firstPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstPageUrl"></a>

```java
public java.lang.String getFirstPageUrl();
```

- *Type:* java.lang.String

---

##### `firstSeenAt`<sup>Required</sup> <a name="firstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstSeenAt"></a>

```java
public java.lang.String getFirstSeenAt();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jsIntegrityScore`<sup>Required</sup> <a name="jsIntegrityScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.jsIntegrityScore"></a>

```java
public java.lang.Number getJsIntegrityScore();
```

- *Type:* java.lang.Number

---

##### `lastSeenAt`<sup>Required</sup> <a name="lastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.lastSeenAt"></a>

```java
public java.lang.String getLastSeenAt();
```

- *Type:* java.lang.String

---

##### `magecartScore`<sup>Required</sup> <a name="magecartScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.magecartScore"></a>

```java
public java.lang.Number getMagecartScore();
```

- *Type:* java.lang.Number

---

##### `maliciousDomainCategories`<sup>Required</sup> <a name="maliciousDomainCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousDomainCategories"></a>

```java
public java.util.List<java.lang.String> getMaliciousDomainCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maliciousUrlCategories`<sup>Required</sup> <a name="maliciousUrlCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousUrlCategories"></a>

```java
public java.util.List<java.lang.String> getMaliciousUrlCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `malwareScore`<sup>Required</sup> <a name="malwareScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.malwareScore"></a>

```java
public java.lang.Number getMalwareScore();
```

- *Type:* java.lang.Number

---

##### `obfuscationScore`<sup>Required</sup> <a name="obfuscationScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.obfuscationScore"></a>

```java
public java.lang.Number getObfuscationScore();
```

- *Type:* java.lang.Number

---

##### `pageUrls`<sup>Required</sup> <a name="pageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.pageUrls"></a>

```java
public java.util.List<java.lang.String> getPageUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlContainsCdnCgiPath`<sup>Required</sup> <a name="urlContainsCdnCgiPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlContainsCdnCgiPath"></a>

```java
public IResolvable getUrlContainsCdnCgiPath();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `urlReportedMalicious`<sup>Required</sup> <a name="urlReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlReportedMalicious"></a>

```java
public IResolvable getUrlReportedMalicious();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflarePageShieldScriptsListResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult">DataCloudflarePageShieldScriptsListResult</a>

---



