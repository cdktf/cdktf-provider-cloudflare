# `dataCloudflarePageShieldCookiesList` Submodule <a name="`dataCloudflarePageShieldCookiesList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldCookiesList <a name="DataCloudflarePageShieldCookiesList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  direction: str = None,
  domain: str = None,
  export: str = None,
  hosts: str = None,
  http_only: typing.Union[bool, IResolvable] = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  order_by: str = None,
  page: str = None,
  page_url: str = None,
  path: str = None,
  per_page: typing.Union[int, float] = None,
  same_site: str = None,
  secure: typing.Union[bool, IResolvable] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The direction used to sort returned cookies.' Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Filters the returned cookies that match the specified domain attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.export">export</a></code> | <code>str</code> | Export the list of cookies as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.hosts">hosts</a></code> | <code>str</code> | Includes cookies that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.httpOnly">http_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters the returned cookies that are set with HttpOnly. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.name">name</a></code> | <code>str</code> | Filters the returned cookies that match the specified name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.page">page</a></code> | <code>str</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.pageUrl">page_url</a></code> | <code>str</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.path">path</a></code> | <code>str</code> | Filters the returned cookies that match the specified path attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.sameSite">same_site</a></code> | <code>str</code> | Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.secure">secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters the returned cookies that are set with Secure. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.type">type</a></code> | <code>str</code> | Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.direction"></a>

- *Type:* str

The direction used to sort returned cookies.' Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.domain"></a>

- *Type:* str

Filters the returned cookies that match the specified domain attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.export"></a>

- *Type:* str

Export the list of cookies as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.hosts"></a>

- *Type:* str

Includes cookies that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}

---

##### `http_only`<sup>Optional</sup> <a name="http_only" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.httpOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters the returned cookies that are set with HttpOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.name"></a>

- *Type:* str

Filters the returned cookies that match the specified name.

Wildcards are supported at the start and end to support starts with, ends with
and contains. e.g. session*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.orderBy"></a>

- *Type:* str

The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.page"></a>

- *Type:* str

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the cookies
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of cookies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}

---

##### `page_url`<sup>Optional</sup> <a name="page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.pageUrl"></a>

- *Type:* str

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.path"></a>

- *Type:* str

Filters the returned cookies that match the specified path attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.perPage"></a>

- *Type:* typing.Union[int, float]

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}

---

##### `same_site`<sup>Optional</sup> <a name="same_site" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.sameSite"></a>

- *Type:* str

Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.secure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters the returned cookies that are set with Secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.type"></a>

- *Type:* str

Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport">reset_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly">reset_http_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage">reset_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl">reset_page_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage">reset_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite">reset_same_site</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure">reset_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_export` <a name="reset_export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport"></a>

```python
def reset_export() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_http_only` <a name="reset_http_only" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly"></a>

```python
def reset_http_only() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_page` <a name="reset_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage"></a>

```python
def reset_page() -> None
```

##### `reset_page_url` <a name="reset_page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl"></a>

```python
def reset_page_url() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_per_page` <a name="reset_per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage"></a>

```python
def reset_per_page() -> None
```

##### `reset_same_site` <a name="reset_same_site" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite"></a>

```python
def reset_same_site() -> None
```

##### `reset_secure` <a name="reset_secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure"></a>

```python
def reset_secure() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflarePageShieldCookiesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput">export_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput">hosts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput">http_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput">page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput">page_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput">per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput">same_site_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput">secure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export">export</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts">hosts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly">http_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page">page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl">page_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite">same_site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure">secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result"></a>

```python
result: DataCloudflarePageShieldCookiesListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `export_input`<sup>Optional</sup> <a name="export_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput"></a>

```python
export_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput"></a>

```python
hosts_input: str
```

- *Type:* str

---

##### `http_only_input`<sup>Optional</sup> <a name="http_only_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput"></a>

```python
http_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput"></a>

```python
page_input: str
```

- *Type:* str

---

##### `page_url_input`<sup>Optional</sup> <a name="page_url_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput"></a>

```python
page_url_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `per_page_input`<sup>Optional</sup> <a name="per_page_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput"></a>

```python
per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `same_site_input`<sup>Optional</sup> <a name="same_site_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput"></a>

```python
same_site_input: str
```

- *Type:* str

---

##### `secure_input`<sup>Optional</sup> <a name="secure_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput"></a>

```python
secure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export"></a>

```python
export: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts"></a>

```python
hosts: str
```

- *Type:* str

---

##### `http_only`<sup>Required</sup> <a name="http_only" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly"></a>

```python
http_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page"></a>

```python
page: str
```

- *Type:* str

---

##### `page_url`<sup>Required</sup> <a name="page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl"></a>

```python
page_url: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `per_page`<sup>Required</sup> <a name="per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `same_site`<sup>Required</sup> <a name="same_site" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite"></a>

```python
same_site: str
```

- *Type:* str

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure"></a>

```python
secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldCookiesListConfig <a name="DataCloudflarePageShieldCookiesListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  direction: str = None,
  domain: str = None,
  export: str = None,
  hosts: str = None,
  http_only: typing.Union[bool, IResolvable] = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  order_by: str = None,
  page: str = None,
  page_url: str = None,
  path: str = None,
  per_page: typing.Union[int, float] = None,
  same_site: str = None,
  secure: typing.Union[bool, IResolvable] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction">direction</a></code> | <code>str</code> | The direction used to sort returned cookies.' Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain">domain</a></code> | <code>str</code> | Filters the returned cookies that match the specified domain attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export">export</a></code> | <code>str</code> | Export the list of cookies as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts">hosts</a></code> | <code>str</code> | Includes cookies that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly">http_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters the returned cookies that are set with HttpOnly. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name">name</a></code> | <code>str</code> | Filters the returned cookies that match the specified name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy">order_by</a></code> | <code>str</code> | The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page">page</a></code> | <code>str</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl">page_url</a></code> | <code>str</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path">path</a></code> | <code>str</code> | Filters the returned cookies that match the specified path attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite">same_site</a></code> | <code>str</code> | Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure">secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters the returned cookies that are set with Secure. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type">type</a></code> | <code>str</code> | Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction used to sort returned cookies.' Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Filters the returned cookies that match the specified domain attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export"></a>

```python
export: str
```

- *Type:* str

Export the list of cookies as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts"></a>

```python
hosts: str
```

- *Type:* str

Includes cookies that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}

---

##### `http_only`<sup>Optional</sup> <a name="http_only" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly"></a>

```python
http_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters the returned cookies that are set with HttpOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Filters the returned cookies that match the specified name.

Wildcards are supported at the start and end to support starts with, ends with
and contains. e.g. session*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page"></a>

```python
page: str
```

- *Type:* str

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the cookies
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of cookies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}

---

##### `page_url`<sup>Optional</sup> <a name="page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl"></a>

```python
page_url: str
```

- *Type:* str

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Filters the returned cookies that match the specified path attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}

---

##### `same_site`<sup>Optional</sup> <a name="same_site" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite"></a>

```python
same_site: str
```

- *Type:* str

Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure"></a>

```python
secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters the returned cookies that are set with Secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}

---

### DataCloudflarePageShieldCookiesListResult <a name="DataCloudflarePageShieldCookiesListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldCookiesListResultList <a name="DataCloudflarePageShieldCookiesListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflarePageShieldCookiesListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflarePageShieldCookiesListResultOutputReference <a name="DataCloudflarePageShieldCookiesListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_cookies_list

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute">domain_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute">expires_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt">first_seen_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute">http_only_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt">last_seen_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute">max_age_attribute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls">page_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute">path_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute">same_site_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute">secure_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_attribute`<sup>Required</sup> <a name="domain_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute"></a>

```python
domain_attribute: str
```

- *Type:* str

---

##### `expires_attribute`<sup>Required</sup> <a name="expires_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute"></a>

```python
expires_attribute: str
```

- *Type:* str

---

##### `first_seen_at`<sup>Required</sup> <a name="first_seen_at" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt"></a>

```python
first_seen_at: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_only_attribute`<sup>Required</sup> <a name="http_only_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute"></a>

```python
http_only_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_seen_at`<sup>Required</sup> <a name="last_seen_at" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt"></a>

```python
last_seen_at: str
```

- *Type:* str

---

##### `max_age_attribute`<sup>Required</sup> <a name="max_age_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute"></a>

```python
max_age_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `page_urls`<sup>Required</sup> <a name="page_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls"></a>

```python
page_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_attribute`<sup>Required</sup> <a name="path_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute"></a>

```python
path_attribute: str
```

- *Type:* str

---

##### `same_site_attribute`<sup>Required</sup> <a name="same_site_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute"></a>

```python
same_site_attribute: str
```

- *Type:* str

---

##### `secure_attribute`<sup>Required</sup> <a name="secure_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute"></a>

```python
secure_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePageShieldCookiesListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a>

---



