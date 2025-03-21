# `dataCloudflarePageShieldCookiesList` Submodule <a name="`dataCloudflarePageShieldCookiesList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldCookiesList <a name="DataCloudflarePageShieldCookiesList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesList;

DataCloudflarePageShieldCookiesList.Builder.create(Construct scope, java.lang.String id)
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
//  .domain(java.lang.String)
//  .export(java.lang.String)
//  .hosts(java.lang.String)
//  .httpOnly(java.lang.Boolean)
//  .httpOnly(IResolvable)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .orderBy(java.lang.String)
//  .page(java.lang.String)
//  .pageUrl(java.lang.String)
//  .path(java.lang.String)
//  .perPage(java.lang.Number)
//  .sameSite(java.lang.String)
//  .secure(java.lang.Boolean)
//  .secure(IResolvable)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The direction used to sort returned cookies.' Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified domain attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.export">export</a></code> | <code>java.lang.String</code> | Export the list of cookies as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.hosts">hosts</a></code> | <code>java.lang.String</code> | Includes cookies that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.httpOnly">httpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filters the returned cookies that are set with HttpOnly. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.page">page</a></code> | <code>java.lang.String</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified path attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.perPage">perPage</a></code> | <code>java.lang.Number</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.sameSite">sameSite</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.secure">secure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filters the returned cookies that are set with Secure. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The direction used to sort returned cookies.' Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Filters the returned cookies that match the specified domain attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.export"></a>

- *Type:* java.lang.String

Export the list of cookies as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.hosts"></a>

- *Type:* java.lang.String

Includes cookies that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.httpOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filters the returned cookies that are set with HttpOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filters the returned cookies that match the specified name.

Wildcards are supported at the start and end to support starts with, ends with
and contains. e.g. session*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.page"></a>

- *Type:* java.lang.String

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the cookies
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of cookies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}

---

##### `pageUrl`<sup>Optional</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.pageUrl"></a>

- *Type:* java.lang.String

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Filters the returned cookies that match the specified path attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.perPage"></a>

- *Type:* java.lang.Number

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.sameSite"></a>

- *Type:* java.lang.String

Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.secure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filters the returned cookies that are set with Secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport">resetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly">resetHttpOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl">resetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite">resetSameSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetExport` <a name="resetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport"></a>

```java
public void resetExport()
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetHttpOnly` <a name="resetHttpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly"></a>

```java
public void resetHttpOnly()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName"></a>

```java
public void resetName()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage"></a>

```java
public void resetPage()
```

##### `resetPageUrl` <a name="resetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl"></a>

```java
public void resetPageUrl()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath"></a>

```java
public void resetPath()
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage"></a>

```java
public void resetPerPage()
```

##### `resetSameSite` <a name="resetSameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite"></a>

```java
public void resetSameSite()
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure"></a>

```java
public void resetSecure()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesList;

DataCloudflarePageShieldCookiesList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesList;

DataCloudflarePageShieldCookiesList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesList;

DataCloudflarePageShieldCookiesList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesList;

DataCloudflarePageShieldCookiesList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflarePageShieldCookiesList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflarePageShieldCookiesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput">exportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput">hostsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput">httpOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput">pageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput">pageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput">perPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput">sameSiteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput">secureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export">export</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts">hosts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly">httpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page">page</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite">sameSite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure">secure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result"></a>

```java
public DataCloudflarePageShieldCookiesListResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput"></a>

```java
public java.lang.String getExportInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput"></a>

```java
public java.lang.String getHostsInput();
```

- *Type:* java.lang.String

---

##### `httpOnlyInput`<sup>Optional</sup> <a name="httpOnlyInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput"></a>

```java
public java.lang.Object getHttpOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput"></a>

```java
public java.lang.String getPageInput();
```

- *Type:* java.lang.String

---

##### `pageUrlInput`<sup>Optional</sup> <a name="pageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput"></a>

```java
public java.lang.String getPageUrlInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput"></a>

```java
public java.lang.Number getPerPageInput();
```

- *Type:* java.lang.Number

---

##### `sameSiteInput`<sup>Optional</sup> <a name="sameSiteInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput"></a>

```java
public java.lang.String getSameSiteInput();
```

- *Type:* java.lang.String

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput"></a>

```java
public java.lang.Object getSecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export"></a>

```java
public java.lang.String getExport();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts"></a>

```java
public java.lang.String getHosts();
```

- *Type:* java.lang.String

---

##### `httpOnly`<sup>Required</sup> <a name="httpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly"></a>

```java
public java.lang.Object getHttpOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

---

##### `pageUrl`<sup>Required</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl"></a>

```java
public java.lang.String getPageUrl();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

---

##### `sameSite`<sup>Required</sup> <a name="sameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite"></a>

```java
public java.lang.String getSameSite();
```

- *Type:* java.lang.String

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure"></a>

```java
public java.lang.Object getSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldCookiesListConfig <a name="DataCloudflarePageShieldCookiesListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesListConfig;

DataCloudflarePageShieldCookiesListConfig.builder()
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
//  .domain(java.lang.String)
//  .export(java.lang.String)
//  .hosts(java.lang.String)
//  .httpOnly(java.lang.Boolean)
//  .httpOnly(IResolvable)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .orderBy(java.lang.String)
//  .page(java.lang.String)
//  .pageUrl(java.lang.String)
//  .path(java.lang.String)
//  .perPage(java.lang.Number)
//  .sameSite(java.lang.String)
//  .secure(java.lang.Boolean)
//  .secure(IResolvable)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction used to sort returned cookies.' Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified domain attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export">export</a></code> | <code>java.lang.String</code> | Export the list of cookies as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts">hosts</a></code> | <code>java.lang.String</code> | Includes cookies that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly">httpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filters the returned cookies that are set with HttpOnly. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page">page</a></code> | <code>java.lang.String</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path">path</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified path attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite">sameSite</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure">secure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filters the returned cookies that are set with Secure. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type">type</a></code> | <code>java.lang.String</code> | Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction used to sort returned cookies.' Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Filters the returned cookies that match the specified domain attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export"></a>

```java
public java.lang.String getExport();
```

- *Type:* java.lang.String

Export the list of cookies as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts"></a>

```java
public java.lang.String getHosts();
```

- *Type:* java.lang.String

Includes cookies that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly"></a>

```java
public java.lang.Object getHttpOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filters the returned cookies that are set with HttpOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filters the returned cookies that match the specified name.

Wildcards are supported at the start and end to support starts with, ends with
and contains. e.g. session*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the cookies
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of cookies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}

---

##### `pageUrl`<sup>Optional</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl"></a>

```java
public java.lang.String getPageUrl();
```

- *Type:* java.lang.String

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Filters the returned cookies that match the specified path attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite"></a>

```java
public java.lang.String getSameSite();
```

- *Type:* java.lang.String

Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure"></a>

```java
public java.lang.Object getSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filters the returned cookies that are set with Secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}

---

### DataCloudflarePageShieldCookiesListResult <a name="DataCloudflarePageShieldCookiesListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesListResult;

DataCloudflarePageShieldCookiesListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldCookiesListResultList <a name="DataCloudflarePageShieldCookiesListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesListResultList;

new DataCloudflarePageShieldCookiesListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get"></a>

```java
public DataCloudflarePageShieldCookiesListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflarePageShieldCookiesListResultOutputReference <a name="DataCloudflarePageShieldCookiesListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_page_shield_cookies_list.DataCloudflarePageShieldCookiesListResultOutputReference;

new DataCloudflarePageShieldCookiesListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute">domainAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute">expiresAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt">firstSeenAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute">httpOnlyAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt">lastSeenAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute">maxAgeAttribute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls">pageUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute">pathAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute">sameSiteAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute">secureAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainAttribute`<sup>Required</sup> <a name="domainAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute"></a>

```java
public java.lang.String getDomainAttribute();
```

- *Type:* java.lang.String

---

##### `expiresAttribute`<sup>Required</sup> <a name="expiresAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute"></a>

```java
public java.lang.String getExpiresAttribute();
```

- *Type:* java.lang.String

---

##### `firstSeenAt`<sup>Required</sup> <a name="firstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt"></a>

```java
public java.lang.String getFirstSeenAt();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `httpOnlyAttribute`<sup>Required</sup> <a name="httpOnlyAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute"></a>

```java
public IResolvable getHttpOnlyAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastSeenAt`<sup>Required</sup> <a name="lastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt"></a>

```java
public java.lang.String getLastSeenAt();
```

- *Type:* java.lang.String

---

##### `maxAgeAttribute`<sup>Required</sup> <a name="maxAgeAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute"></a>

```java
public java.lang.Number getMaxAgeAttribute();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pageUrls`<sup>Required</sup> <a name="pageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls"></a>

```java
public java.util.List<java.lang.String> getPageUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathAttribute`<sup>Required</sup> <a name="pathAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute"></a>

```java
public java.lang.String getPathAttribute();
```

- *Type:* java.lang.String

---

##### `sameSiteAttribute`<sup>Required</sup> <a name="sameSiteAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute"></a>

```java
public java.lang.String getSameSiteAttribute();
```

- *Type:* java.lang.String

---

##### `secureAttribute`<sup>Required</sup> <a name="secureAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute"></a>

```java
public IResolvable getSecureAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflarePageShieldCookiesListResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a>

---



