# `dataCloudflareDnsRecords` Submodule <a name="`dataCloudflareDnsRecords` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsRecords <a name="DataCloudflareDnsRecords" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records cloudflare_dns_records}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecords(
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
  comment: DataCloudflareDnsRecordsComment = None,
  content: DataCloudflareDnsRecordsContent = None,
  direction: str = None,
  match: str = None,
  max_items: typing.Union[int, float] = None,
  name: DataCloudflareDnsRecordsName = None,
  order: str = None,
  proxied: typing.Union[bool, IResolvable] = None,
  search: str = None,
  tag: DataCloudflareDnsRecordsTag = None,
  tag_match: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.comment">comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Direction to order DNS records in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.match">match</a></code> | <code>str</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tag">tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tagMatch">tag_match</a></code> | <code>str</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.type">type</a></code> | <code>str</code> | Record type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#zone_id DataCloudflareDnsRecords#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.comment"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.direction"></a>

- *Type:* str

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#direction DataCloudflareDnsRecords#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.match"></a>

- *Type:* str

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#match DataCloudflareDnsRecords#match}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#max_items DataCloudflareDnsRecords#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.order"></a>

- *Type:* str

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#order DataCloudflareDnsRecords#order}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.proxied"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#proxied DataCloudflareDnsRecords#proxied}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.search"></a>

- *Type:* str

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#search DataCloudflareDnsRecords#search}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}.

---

##### `tag_match`<sup>Optional</sup> <a name="tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tagMatch"></a>

- *Type:* str

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#tag_match DataCloudflareDnsRecords#tag_match}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.type"></a>

- *Type:* str

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#type DataCloudflareDnsRecords#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment">put_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetProxied">reset_proxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTagMatch">reset_tag_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_comment` <a name="put_comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment"></a>

```python
def put_comment(
  absent: str = None,
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  present: str = None,
  startswith: str = None
) -> None
```

###### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.absent"></a>

- *Type:* str

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.contains"></a>

- *Type:* str

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.exact"></a>

- *Type:* str

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

###### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.present"></a>

- *Type:* str

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

##### `put_content` <a name="put_content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent"></a>

```python
def put_content(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent.parameter.contains"></a>

- *Type:* str

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent.parameter.exact"></a>

- *Type:* str

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

##### `put_name` <a name="put_name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName"></a>

```python
def put_name(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName.parameter.contains"></a>

- *Type:* str

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName.parameter.exact"></a>

- *Type:* str

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag"></a>

```python
def put_tag(
  absent: str = None,
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  present: str = None,
  startswith: str = None
) -> None
```

###### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.absent"></a>

- *Type:* str

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.contains"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.endswith"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.exact"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

###### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.present"></a>

- *Type:* str

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.startswith"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_proxied` <a name="reset_proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetProxied"></a>

```python
def reset_proxied() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_tag_match` <a name="reset_tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTagMatch"></a>

```python
def reset_tag_match() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecords.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecords.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecords.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecords.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareDnsRecords to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareDnsRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference">DataCloudflareDnsRecordsCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.content">content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference">DataCloudflareDnsRecordsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference">DataCloudflareDnsRecordsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList">DataCloudflareDnsRecordsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference">DataCloudflareDnsRecordsTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.commentInput">comment_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.contentInput">content_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.nameInput">name_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxiedInput">proxied_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatchInput">tag_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatch">tag_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.comment"></a>

```python
comment: DataCloudflareDnsRecordsCommentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference">DataCloudflareDnsRecordsCommentOutputReference</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.content"></a>

```python
content: DataCloudflareDnsRecordsContentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference">DataCloudflareDnsRecordsContentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.name"></a>

```python
name: DataCloudflareDnsRecordsNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference">DataCloudflareDnsRecordsNameOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.result"></a>

```python
result: DataCloudflareDnsRecordsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList">DataCloudflareDnsRecordsResultList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tag"></a>

```python
tag: DataCloudflareDnsRecordsTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference">DataCloudflareDnsRecordsTagOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.commentInput"></a>

```python
comment_input: typing.Union[IResolvable, DataCloudflareDnsRecordsComment]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>]

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.contentInput"></a>

```python
content_input: typing.Union[IResolvable, DataCloudflareDnsRecordsContent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.nameInput"></a>

```python
name_input: typing.Union[IResolvable, DataCloudflareDnsRecordsName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `proxied_input`<sup>Optional</sup> <a name="proxied_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxiedInput"></a>

```python
proxied_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, DataCloudflareDnsRecordsTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>]

---

##### `tag_match_input`<sup>Optional</sup> <a name="tag_match_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatchInput"></a>

```python
tag_match_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `tag_match`<sup>Required</sup> <a name="tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatch"></a>

```python
tag_match: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsRecordsComment <a name="DataCloudflareDnsRecordsComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment(
  absent: str = None,
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  present: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.absent">absent</a></code> | <code>str</code> | If this parameter is present, only records *without* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.present">present</a></code> | <code>str</code> | If this parameter is present, only records *with* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS record comment. Comment filters are case-insensitive. |

---

##### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.absent"></a>

```python
absent: str
```

- *Type:* str

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.present"></a>

```python
present: str
```

- *Type:* str

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsConfig <a name="DataCloudflareDnsRecordsConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  comment: DataCloudflareDnsRecordsComment = None,
  content: DataCloudflareDnsRecordsContent = None,
  direction: str = None,
  match: str = None,
  max_items: typing.Union[int, float] = None,
  name: DataCloudflareDnsRecordsName = None,
  order: str = None,
  proxied: typing.Union[bool, IResolvable] = None,
  search: str = None,
  tag: DataCloudflareDnsRecordsTag = None,
  tag_match: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.content">content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.direction">direction</a></code> | <code>str</code> | Direction to order DNS records in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.match">match</a></code> | <code>str</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.order">order</a></code> | <code>str</code> | Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tagMatch">tag_match</a></code> | <code>str</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.type">type</a></code> | <code>str</code> | Record type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#zone_id DataCloudflareDnsRecords#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.comment"></a>

```python
comment: DataCloudflareDnsRecordsComment
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.content"></a>

```python
content: DataCloudflareDnsRecordsContent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#direction DataCloudflareDnsRecords#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.match"></a>

```python
match: str
```

- *Type:* str

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#match DataCloudflareDnsRecords#match}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#max_items DataCloudflareDnsRecords#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.name"></a>

```python
name: DataCloudflareDnsRecordsName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#order DataCloudflareDnsRecords#order}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#proxied DataCloudflareDnsRecords#proxied}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#search DataCloudflareDnsRecords#search}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tag"></a>

```python
tag: DataCloudflareDnsRecordsTag
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}.

---

##### `tag_match`<sup>Optional</sup> <a name="tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tagMatch"></a>

```python
tag_match: str
```

- *Type:* str

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#tag_match DataCloudflareDnsRecords#tag_match}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#type DataCloudflareDnsRecords#type}

---

### DataCloudflareDnsRecordsContent <a name="DataCloudflareDnsRecordsContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS record content. Content filters are case-insensitive. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsName <a name="DataCloudflareDnsRecordsName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsName(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS record name. Name filters are case-insensitive. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsResult <a name="DataCloudflareDnsRecordsResult" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult()
```


### DataCloudflareDnsRecordsResultData <a name="DataCloudflareDnsRecordsResultData" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData()
```


### DataCloudflareDnsRecordsResultSettings <a name="DataCloudflareDnsRecordsResultSettings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings()
```


### DataCloudflareDnsRecordsTag <a name="DataCloudflareDnsRecordsTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag(
  absent: str = None,
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  present: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.absent">absent</a></code> | <code>str</code> | Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.contains">contains</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.endswith">endswith</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.exact">exact</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.present">present</a></code> | <code>str</code> | Name of a tag which must be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.startswith">startswith</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |

---

##### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.absent"></a>

```python
absent: str
```

- *Type:* str

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.contains"></a>

```python
contains: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.exact"></a>

```python
exact: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.present"></a>

```python
present: str
```

- *Type:* str

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsRecordsCommentOutputReference <a name="DataCloudflareDnsRecordsCommentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetAbsent">reset_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absent` <a name="reset_absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetAbsent"></a>

```python
def reset_absent() -> None
```

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absentInput">absent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.presentInput">present_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absent">absent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.present">present</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absent_input`<sup>Optional</sup> <a name="absent_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absentInput"></a>

```python
absent_input: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.presentInput"></a>

```python
present_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `absent`<sup>Required</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absent"></a>

```python
absent: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.present"></a>

```python
present: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordsComment]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>]

---


### DataCloudflareDnsRecordsContentOutputReference <a name="DataCloudflareDnsRecordsContentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordsContent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>]

---


### DataCloudflareDnsRecordsNameOutputReference <a name="DataCloudflareDnsRecordsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordsName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>]

---


### DataCloudflareDnsRecordsResultDataOutputReference <a name="DataCloudflareDnsRecordsResultDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.algorithm">algorithm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.altitude">altitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digestType">digest_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.flags">flags</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDegrees">lat_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDirection">lat_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latMinutes">lat_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latSeconds">lat_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDegrees">long_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDirection">long_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longMinutes">long_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longSeconds">long_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.matchingType">matching_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionHorz">precision_horz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionVert">precision_vert</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.preference">preference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.replacement">replacement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.selector">selector</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData">DataCloudflareDnsRecordsResultData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.algorithm"></a>

```python
algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.altitude"></a>

```python
altitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digestType"></a>

```python
digest_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.flags"></a>

```python
flags: AnyMap
```

- *Type:* cdktf.AnyMap

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_degrees`<sup>Required</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDegrees"></a>

```python
lat_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_direction`<sup>Required</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDirection"></a>

```python
lat_direction: str
```

- *Type:* str

---

##### `lat_minutes`<sup>Required</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latMinutes"></a>

```python
lat_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_seconds`<sup>Required</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latSeconds"></a>

```python
lat_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_degrees`<sup>Required</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDegrees"></a>

```python
long_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_direction`<sup>Required</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDirection"></a>

```python
long_direction: str
```

- *Type:* str

---

##### `long_minutes`<sup>Required</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longMinutes"></a>

```python
long_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_seconds`<sup>Required</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longSeconds"></a>

```python
long_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matching_type`<sup>Required</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.matchingType"></a>

```python
matching_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_horz`<sup>Required</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionHorz"></a>

```python
precision_horz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_vert`<sup>Required</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionVert"></a>

```python
precision_vert: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.preference"></a>

```python
preference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.selector"></a>

```python
selector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareDnsRecordsResultData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData">DataCloudflareDnsRecordsResultData</a>

---


### DataCloudflareDnsRecordsResultList <a name="DataCloudflareDnsRecordsResultList" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareDnsRecordsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareDnsRecordsResultOutputReference <a name="DataCloudflareDnsRecordsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.commentModifiedOn">comment_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference">DataCloudflareDnsRecordsResultDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.meta">meta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxiable">proxiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxied">proxied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference">DataCloudflareDnsRecordsResultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tagsModifiedOn">tags_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult">DataCloudflareDnsRecordsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `comment_modified_on`<sup>Required</sup> <a name="comment_modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.commentModifiedOn"></a>

```python
comment_modified_on: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.data"></a>

```python
data: DataCloudflareDnsRecordsResultDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference">DataCloudflareDnsRecordsResultDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxiable"></a>

```python
proxiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxied"></a>

```python
proxied: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.settings"></a>

```python
settings: DataCloudflareDnsRecordsResultSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference">DataCloudflareDnsRecordsResultSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_modified_on`<sup>Required</sup> <a name="tags_modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tagsModifiedOn"></a>

```python
tags_modified_on: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareDnsRecordsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult">DataCloudflareDnsRecordsResult</a>

---


### DataCloudflareDnsRecordsResultSettingsOutputReference <a name="DataCloudflareDnsRecordsResultSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.flattenCname">flatten_cname</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv4Only">ipv4_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv6Only">ipv6_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings">DataCloudflareDnsRecordsResultSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flatten_cname`<sup>Required</sup> <a name="flatten_cname" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.flattenCname"></a>

```python
flatten_cname: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ipv4_only`<sup>Required</sup> <a name="ipv4_only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv4Only"></a>

```python
ipv4_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ipv6_only`<sup>Required</sup> <a name="ipv6_only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv6Only"></a>

```python
ipv6_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareDnsRecordsResultSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings">DataCloudflareDnsRecordsResultSettings</a>

---


### DataCloudflareDnsRecordsTagOutputReference <a name="DataCloudflareDnsRecordsTagOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_records

dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetAbsent">reset_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absent` <a name="reset_absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetAbsent"></a>

```python
def reset_absent() -> None
```

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absentInput">absent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.presentInput">present_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absent">absent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.present">present</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absent_input`<sup>Optional</sup> <a name="absent_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absentInput"></a>

```python
absent_input: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.presentInput"></a>

```python
present_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `absent`<sup>Required</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absent"></a>

```python
absent: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.present"></a>

```python
present: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordsTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>]

---



