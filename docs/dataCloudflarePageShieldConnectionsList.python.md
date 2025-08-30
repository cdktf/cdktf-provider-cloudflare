# `dataCloudflarePageShieldConnectionsList` Submodule <a name="`dataCloudflarePageShieldConnectionsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldConnectionsList <a name="DataCloudflarePageShieldConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList(
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
  exclude_cdn_cgi: typing.Union[bool, IResolvable] = None,
  exclude_urls: str = None,
  export: str = None,
  hosts: str = None,
  max_items: typing.Union[int, float] = None,
  order_by: str = None,
  page: str = None,
  page_url: str = None,
  per_page: typing.Union[int, float] = None,
  prioritize_malicious: typing.Union[bool, IResolvable] = None,
  status: str = None,
  urls: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The direction used to sort returned connections. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.excludeCdnCgi">exclude_cdn_cgi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.excludeUrls">exclude_urls</a></code> | <code>str</code> | Excludes connections whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.export">export</a></code> | <code>str</code> | Export the list of connections as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.hosts">hosts</a></code> | <code>str</code> | Includes connections that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | The field used to sort returned connections. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.page">page</a></code> | <code>str</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.pageUrl">page_url</a></code> | <code>str</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.prioritizeMalicious">prioritize_malicious</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, malicious connections appear first in the returned connections. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.status">status</a></code> | <code>str</code> | Filters the returned connections using a comma-separated list of connection statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.urls">urls</a></code> | <code>str</code> | Includes connections whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#zone_id DataCloudflarePageShieldConnectionsList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.direction"></a>

- *Type:* str

The direction used to sort returned connections. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#direction DataCloudflarePageShieldConnectionsList#direction}

---

##### `exclude_cdn_cgi`<sup>Optional</sup> <a name="exclude_cdn_cgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.excludeCdnCgi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#exclude_cdn_cgi DataCloudflarePageShieldConnectionsList#exclude_cdn_cgi}

---

##### `exclude_urls`<sup>Optional</sup> <a name="exclude_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.excludeUrls"></a>

- *Type:* str

Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#exclude_urls DataCloudflarePageShieldConnectionsList#exclude_urls}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.export"></a>

- *Type:* str

Export the list of connections as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#export DataCloudflarePageShieldConnectionsList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.hosts"></a>

- *Type:* str

Includes connections that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#hosts DataCloudflarePageShieldConnectionsList#hosts}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#max_items DataCloudflarePageShieldConnectionsList#max_items}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.orderBy"></a>

- *Type:* str

The field used to sort returned connections. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#order_by DataCloudflarePageShieldConnectionsList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.page"></a>

- *Type:* str

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the connections
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of connections

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#page DataCloudflarePageShieldConnectionsList#page}

---

##### `page_url`<sup>Optional</sup> <a name="page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.pageUrl"></a>

- *Type:* str

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#page_url DataCloudflarePageShieldConnectionsList#page_url}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.perPage"></a>

- *Type:* typing.Union[int, float]

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#per_page DataCloudflarePageShieldConnectionsList#per_page}

---

##### `prioritize_malicious`<sup>Optional</sup> <a name="prioritize_malicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.prioritizeMalicious"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, malicious connections appear first in the returned connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#prioritize_malicious DataCloudflarePageShieldConnectionsList#prioritize_malicious}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.status"></a>

- *Type:* str

Filters the returned connections using a comma-separated list of connection statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#status DataCloudflarePageShieldConnectionsList#status}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.urls"></a>

- *Type:* str

Includes connections whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#urls DataCloudflarePageShieldConnectionsList#urls}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeCdnCgi">reset_exclude_cdn_cgi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeUrls">reset_exclude_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExport">reset_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPage">reset_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPageUrl">reset_page_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPerPage">reset_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPrioritizeMalicious">reset_prioritize_malicious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetUrls">reset_urls</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_exclude_cdn_cgi` <a name="reset_exclude_cdn_cgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeCdnCgi"></a>

```python
def reset_exclude_cdn_cgi() -> None
```

##### `reset_exclude_urls` <a name="reset_exclude_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeUrls"></a>

```python
def reset_exclude_urls() -> None
```

##### `reset_export` <a name="reset_export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExport"></a>

```python
def reset_export() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_page` <a name="reset_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPage"></a>

```python
def reset_page() -> None
```

##### `reset_page_url` <a name="reset_page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPageUrl"></a>

```python
def reset_page_url() -> None
```

##### `reset_per_page` <a name="reset_per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPerPage"></a>

```python
def reset_per_page() -> None
```

##### `reset_prioritize_malicious` <a name="reset_prioritize_malicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPrioritizeMalicious"></a>

```python
def reset_prioritize_malicious() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_urls` <a name="reset_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetUrls"></a>

```python
def reset_urls() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflarePageShieldConnectionsList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflarePageShieldConnectionsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldConnectionsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList">DataCloudflarePageShieldConnectionsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgiInput">exclude_cdn_cgi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrlsInput">exclude_urls_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.exportInput">export_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hostsInput">hosts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageInput">page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrlInput">page_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPageInput">per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMaliciousInput">prioritize_malicious_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urlsInput">urls_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgi">exclude_cdn_cgi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrls">exclude_urls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.export">export</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hosts">hosts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.page">page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrl">page_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMalicious">prioritize_malicious</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urls">urls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.result"></a>

```python
result: DataCloudflarePageShieldConnectionsListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList">DataCloudflarePageShieldConnectionsListResultList</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `exclude_cdn_cgi_input`<sup>Optional</sup> <a name="exclude_cdn_cgi_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgiInput"></a>

```python
exclude_cdn_cgi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_urls_input`<sup>Optional</sup> <a name="exclude_urls_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrlsInput"></a>

```python
exclude_urls_input: str
```

- *Type:* str

---

##### `export_input`<sup>Optional</sup> <a name="export_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.exportInput"></a>

```python
export_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hostsInput"></a>

```python
hosts_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageInput"></a>

```python
page_input: str
```

- *Type:* str

---

##### `page_url_input`<sup>Optional</sup> <a name="page_url_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrlInput"></a>

```python
page_url_input: str
```

- *Type:* str

---

##### `per_page_input`<sup>Optional</sup> <a name="per_page_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPageInput"></a>

```python
per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prioritize_malicious_input`<sup>Optional</sup> <a name="prioritize_malicious_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMaliciousInput"></a>

```python
prioritize_malicious_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `urls_input`<sup>Optional</sup> <a name="urls_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urlsInput"></a>

```python
urls_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `exclude_cdn_cgi`<sup>Required</sup> <a name="exclude_cdn_cgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgi"></a>

```python
exclude_cdn_cgi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_urls`<sup>Required</sup> <a name="exclude_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrls"></a>

```python
exclude_urls: str
```

- *Type:* str

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.export"></a>

```python
export: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hosts"></a>

```python
hosts: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.page"></a>

```python
page: str
```

- *Type:* str

---

##### `page_url`<sup>Required</sup> <a name="page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrl"></a>

```python
page_url: str
```

- *Type:* str

---

##### `per_page`<sup>Required</sup> <a name="per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prioritize_malicious`<sup>Required</sup> <a name="prioritize_malicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMalicious"></a>

```python
prioritize_malicious: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urls"></a>

```python
urls: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldConnectionsListConfig <a name="DataCloudflarePageShieldConnectionsListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  direction: str = None,
  exclude_cdn_cgi: typing.Union[bool, IResolvable] = None,
  exclude_urls: str = None,
  export: str = None,
  hosts: str = None,
  max_items: typing.Union[int, float] = None,
  order_by: str = None,
  page: str = None,
  page_url: str = None,
  per_page: typing.Union[int, float] = None,
  prioritize_malicious: typing.Union[bool, IResolvable] = None,
  status: str = None,
  urls: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.direction">direction</a></code> | <code>str</code> | The direction used to sort returned connections. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeCdnCgi">exclude_cdn_cgi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeUrls">exclude_urls</a></code> | <code>str</code> | Excludes connections whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.export">export</a></code> | <code>str</code> | Export the list of connections as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.hosts">hosts</a></code> | <code>str</code> | Includes connections that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.orderBy">order_by</a></code> | <code>str</code> | The field used to sort returned connections. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.page">page</a></code> | <code>str</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.pageUrl">page_url</a></code> | <code>str</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.prioritizeMalicious">prioritize_malicious</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, malicious connections appear first in the returned connections. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.status">status</a></code> | <code>str</code> | Filters the returned connections using a comma-separated list of connection statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.urls">urls</a></code> | <code>str</code> | Includes connections whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#zone_id DataCloudflarePageShieldConnectionsList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction used to sort returned connections. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#direction DataCloudflarePageShieldConnectionsList#direction}

---

##### `exclude_cdn_cgi`<sup>Optional</sup> <a name="exclude_cdn_cgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeCdnCgi"></a>

```python
exclude_cdn_cgi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#exclude_cdn_cgi DataCloudflarePageShieldConnectionsList#exclude_cdn_cgi}

---

##### `exclude_urls`<sup>Optional</sup> <a name="exclude_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeUrls"></a>

```python
exclude_urls: str
```

- *Type:* str

Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#exclude_urls DataCloudflarePageShieldConnectionsList#exclude_urls}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.export"></a>

```python
export: str
```

- *Type:* str

Export the list of connections as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#export DataCloudflarePageShieldConnectionsList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.hosts"></a>

```python
hosts: str
```

- *Type:* str

Includes connections that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#hosts DataCloudflarePageShieldConnectionsList#hosts}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#max_items DataCloudflarePageShieldConnectionsList#max_items}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

The field used to sort returned connections. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#order_by DataCloudflarePageShieldConnectionsList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.page"></a>

```python
page: str
```

- *Type:* str

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the connections
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of connections

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#page DataCloudflarePageShieldConnectionsList#page}

---

##### `page_url`<sup>Optional</sup> <a name="page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.pageUrl"></a>

```python
page_url: str
```

- *Type:* str

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#page_url DataCloudflarePageShieldConnectionsList#page_url}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#per_page DataCloudflarePageShieldConnectionsList#per_page}

---

##### `prioritize_malicious`<sup>Optional</sup> <a name="prioritize_malicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.prioritizeMalicious"></a>

```python
prioritize_malicious: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, malicious connections appear first in the returned connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#prioritize_malicious DataCloudflarePageShieldConnectionsList#prioritize_malicious}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Filters the returned connections using a comma-separated list of connection statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#status DataCloudflarePageShieldConnectionsList#status}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.urls"></a>

```python
urls: str
```

- *Type:* str

Includes connections whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/page_shield_connections_list#urls DataCloudflarePageShieldConnectionsList#urls}

---

### DataCloudflarePageShieldConnectionsListResult <a name="DataCloudflarePageShieldConnectionsListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldConnectionsListResultList <a name="DataCloudflarePageShieldConnectionsListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflarePageShieldConnectionsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflarePageShieldConnectionsListResultOutputReference <a name="DataCloudflarePageShieldConnectionsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_page_shield_connections_list

dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.addedAt">added_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.domainReportedMalicious">domain_reported_malicious</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstPageUrl">first_page_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstSeenAt">first_seen_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.lastSeenAt">last_seen_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousDomainCategories">malicious_domain_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousUrlCategories">malicious_url_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.pageUrls">page_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlContainsCdnCgiPath">url_contains_cdn_cgi_path</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlReportedMalicious">url_reported_malicious</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult">DataCloudflarePageShieldConnectionsListResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `added_at`<sup>Required</sup> <a name="added_at" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.addedAt"></a>

```python
added_at: str
```

- *Type:* str

---

##### `domain_reported_malicious`<sup>Required</sup> <a name="domain_reported_malicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.domainReportedMalicious"></a>

```python
domain_reported_malicious: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `first_page_url`<sup>Required</sup> <a name="first_page_url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstPageUrl"></a>

```python
first_page_url: str
```

- *Type:* str

---

##### `first_seen_at`<sup>Required</sup> <a name="first_seen_at" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstSeenAt"></a>

```python
first_seen_at: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_seen_at`<sup>Required</sup> <a name="last_seen_at" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.lastSeenAt"></a>

```python
last_seen_at: str
```

- *Type:* str

---

##### `malicious_domain_categories`<sup>Required</sup> <a name="malicious_domain_categories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousDomainCategories"></a>

```python
malicious_domain_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `malicious_url_categories`<sup>Required</sup> <a name="malicious_url_categories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousUrlCategories"></a>

```python
malicious_url_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `page_urls`<sup>Required</sup> <a name="page_urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.pageUrls"></a>

```python
page_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_contains_cdn_cgi_path`<sup>Required</sup> <a name="url_contains_cdn_cgi_path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlContainsCdnCgiPath"></a>

```python
url_contains_cdn_cgi_path: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `url_reported_malicious`<sup>Required</sup> <a name="url_reported_malicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlReportedMalicious"></a>

```python
url_reported_malicious: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePageShieldConnectionsListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult">DataCloudflarePageShieldConnectionsListResult</a>

---



