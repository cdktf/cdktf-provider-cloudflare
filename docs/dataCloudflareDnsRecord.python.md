# `dataCloudflareDnsRecord` Submodule <a name="`dataCloudflareDnsRecord` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsRecord <a name="DataCloudflareDnsRecord" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecord(
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
  dns_record_id: str = None,
  filter: DataCloudflareDnsRecordFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.dnsRecordId">dns_record_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#zone_id DataCloudflareDnsRecord#zone_id}

---

##### `dns_record_id`<sup>Optional</sup> <a name="dns_record_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.dnsRecordId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#dns_record_id DataCloudflareDnsRecord#dns_record_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetDnsRecordId">reset_dns_record_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter"></a>

```python
def put_filter(
  comment: DataCloudflareDnsRecordFilterComment = None,
  content: DataCloudflareDnsRecordFilterContent = None,
  direction: str = None,
  match: str = None,
  name: DataCloudflareDnsRecordFilterName = None,
  order: str = None,
  proxied: typing.Union[bool, IResolvable] = None,
  search: str = None,
  tag: DataCloudflareDnsRecordFilterTag = None,
  tag_match: str = None,
  type: str = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.comment"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}.

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.content"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}.

---

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.direction"></a>

- *Type:* str

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#direction DataCloudflareDnsRecord#direction}

---

###### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.match"></a>

- *Type:* str

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#match DataCloudflareDnsRecord#match}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}.

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.order"></a>

- *Type:* str

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#order DataCloudflareDnsRecord#order}

---

###### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.proxied"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#proxied DataCloudflareDnsRecord#proxied}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.search"></a>

- *Type:* str

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#search DataCloudflareDnsRecord#search}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}.

---

###### `tag_match`<sup>Optional</sup> <a name="tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.tagMatch"></a>

- *Type:* str

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#tag_match DataCloudflareDnsRecord#tag_match}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.type"></a>

- *Type:* str

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#type DataCloudflareDnsRecord#type}

---

##### `reset_dns_record_id` <a name="reset_dns_record_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetDnsRecordId"></a>

```python
def reset_dns_record_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecord.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareDnsRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareDnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.commentModifiedOn">comment_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference">DataCloudflareDnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference">DataCloudflareDnsRecordFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.meta">meta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxiable">proxiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxied">proxied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference">DataCloudflareDnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tagsModifiedOn">tags_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordIdInput">dns_record_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordId">dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `comment_modified_on`<sup>Required</sup> <a name="comment_modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.commentModifiedOn"></a>

```python
comment_modified_on: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.data"></a>

```python
data: DataCloudflareDnsRecordDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference">DataCloudflareDnsRecordDataOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filter"></a>

```python
filter: DataCloudflareDnsRecordFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference">DataCloudflareDnsRecordFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxiable"></a>

```python
proxiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxied"></a>

```python
proxied: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.settings"></a>

```python
settings: DataCloudflareDnsRecordSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference">DataCloudflareDnsRecordSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_modified_on`<sup>Required</sup> <a name="tags_modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tagsModifiedOn"></a>

```python
tags_modified_on: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `dns_record_id_input`<sup>Optional</sup> <a name="dns_record_id_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordIdInput"></a>

```python
dns_record_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareDnsRecordFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `dns_record_id`<sup>Required</sup> <a name="dns_record_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordId"></a>

```python
dns_record_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsRecordConfig <a name="DataCloudflareDnsRecordConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  dns_record_id: str = None,
  filter: DataCloudflareDnsRecordFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dnsRecordId">dns_record_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#zone_id DataCloudflareDnsRecord#zone_id}

---

##### `dns_record_id`<sup>Optional</sup> <a name="dns_record_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dnsRecordId"></a>

```python
dns_record_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#dns_record_id DataCloudflareDnsRecord#dns_record_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.filter"></a>

```python
filter: DataCloudflareDnsRecordFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}.

---

### DataCloudflareDnsRecordData <a name="DataCloudflareDnsRecordData" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordData()
```


### DataCloudflareDnsRecordFilter <a name="DataCloudflareDnsRecordFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter(
  comment: DataCloudflareDnsRecordFilterComment = None,
  content: DataCloudflareDnsRecordFilterContent = None,
  direction: str = None,
  match: str = None,
  name: DataCloudflareDnsRecordFilterName = None,
  order: str = None,
  proxied: typing.Union[bool, IResolvable] = None,
  search: str = None,
  tag: DataCloudflareDnsRecordFilterTag = None,
  tag_match: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.content">content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.direction">direction</a></code> | <code>str</code> | Direction to order DNS records in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.match">match</a></code> | <code>str</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.order">order</a></code> | <code>str</code> | Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tagMatch">tag_match</a></code> | <code>str</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.type">type</a></code> | <code>str</code> | Record type. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.comment"></a>

```python
comment: DataCloudflareDnsRecordFilterComment
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.content"></a>

```python
content: DataCloudflareDnsRecordFilterContent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#direction DataCloudflareDnsRecord#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.match"></a>

```python
match: str
```

- *Type:* str

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#match DataCloudflareDnsRecord#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.name"></a>

```python
name: DataCloudflareDnsRecordFilterName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#order DataCloudflareDnsRecord#order}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#proxied DataCloudflareDnsRecord#proxied}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#search DataCloudflareDnsRecord#search}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tag"></a>

```python
tag: DataCloudflareDnsRecordFilterTag
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}.

---

##### `tag_match`<sup>Optional</sup> <a name="tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tagMatch"></a>

```python
tag_match: str
```

- *Type:* str

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#tag_match DataCloudflareDnsRecord#tag_match}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.type"></a>

```python
type: str
```

- *Type:* str

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#type DataCloudflareDnsRecord#type}

---

### DataCloudflareDnsRecordFilterComment <a name="DataCloudflareDnsRecordFilterComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.absent">absent</a></code> | <code>str</code> | If this parameter is present, only records *without* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.present">present</a></code> | <code>str</code> | If this parameter is present, only records *with* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS record comment. Comment filters are case-insensitive. |

---

##### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.absent"></a>

```python
absent: str
```

- *Type:* str

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.present"></a>

```python
present: str
```

- *Type:* str

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordFilterContent <a name="DataCloudflareDnsRecordFilterContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS record content. Content filters are case-insensitive. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordFilterName <a name="DataCloudflareDnsRecordFilterName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS record name. Name filters are case-insensitive. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordFilterTag <a name="DataCloudflareDnsRecordFilterTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.absent">absent</a></code> | <code>str</code> | Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.contains">contains</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.endswith">endswith</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.exact">exact</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.present">present</a></code> | <code>str</code> | Name of a tag which must be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.startswith">startswith</a></code> | <code>str</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |

---

##### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.absent"></a>

```python
absent: str
```

- *Type:* str

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.contains"></a>

```python
contains: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.exact"></a>

```python
exact: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.present"></a>

```python
present: str
```

- *Type:* str

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordSettings <a name="DataCloudflareDnsRecordSettings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsRecordDataOutputReference <a name="DataCloudflareDnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.altitude">altitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digestType">digest_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.flags">flags</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDegrees">lat_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDirection">lat_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latMinutes">lat_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latSeconds">lat_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDegrees">long_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDirection">long_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longMinutes">long_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longSeconds">long_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.matchingType">matching_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionHorz">precision_horz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionVert">precision_vert</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.preference">preference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.replacement">replacement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.selector">selector</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData">DataCloudflareDnsRecordData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.algorithm"></a>

```python
algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.altitude"></a>

```python
altitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digestType"></a>

```python
digest_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.flags"></a>

```python
flags: AnyMap
```

- *Type:* cdktf.AnyMap

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_degrees`<sup>Required</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDegrees"></a>

```python
lat_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_direction`<sup>Required</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDirection"></a>

```python
lat_direction: str
```

- *Type:* str

---

##### `lat_minutes`<sup>Required</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latMinutes"></a>

```python
lat_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_seconds`<sup>Required</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latSeconds"></a>

```python
lat_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_degrees`<sup>Required</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDegrees"></a>

```python
long_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_direction`<sup>Required</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDirection"></a>

```python
long_direction: str
```

- *Type:* str

---

##### `long_minutes`<sup>Required</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longMinutes"></a>

```python
long_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_seconds`<sup>Required</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longSeconds"></a>

```python
long_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matching_type`<sup>Required</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.matchingType"></a>

```python
matching_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_horz`<sup>Required</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionHorz"></a>

```python
precision_horz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_vert`<sup>Required</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionVert"></a>

```python
precision_vert: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.preference"></a>

```python
preference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.selector"></a>

```python
selector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareDnsRecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData">DataCloudflareDnsRecordData</a>

---


### DataCloudflareDnsRecordFilterCommentOutputReference <a name="DataCloudflareDnsRecordFilterCommentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetAbsent">reset_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absent` <a name="reset_absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetAbsent"></a>

```python
def reset_absent() -> None
```

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absentInput">absent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.presentInput">present_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absent">absent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.present">present</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absent_input`<sup>Optional</sup> <a name="absent_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absentInput"></a>

```python
absent_input: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.presentInput"></a>

```python
present_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `absent`<sup>Required</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absent"></a>

```python
absent: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.present"></a>

```python
present: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordFilterComment]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>]

---


### DataCloudflareDnsRecordFilterContentOutputReference <a name="DataCloudflareDnsRecordFilterContentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordFilterContent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>]

---


### DataCloudflareDnsRecordFilterNameOutputReference <a name="DataCloudflareDnsRecordFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordFilterName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>]

---


### DataCloudflareDnsRecordFilterOutputReference <a name="DataCloudflareDnsRecordFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment">put_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetProxied">reset_proxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTagMatch">reset_tag_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_comment` <a name="put_comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment"></a>

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

###### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.absent"></a>

- *Type:* str

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}

---

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.contains"></a>

- *Type:* str

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.exact"></a>

- *Type:* str

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

###### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.present"></a>

- *Type:* str

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

##### `put_content` <a name="put_content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent"></a>

```python
def put_content(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent.parameter.contains"></a>

- *Type:* str

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent.parameter.exact"></a>

- *Type:* str

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

##### `put_name` <a name="put_name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName"></a>

```python
def put_name(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName.parameter.contains"></a>

- *Type:* str

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName.parameter.exact"></a>

- *Type:* str

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag"></a>

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

###### `absent`<sup>Optional</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.absent"></a>

- *Type:* str

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}

---

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.contains"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.endswith"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.exact"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

###### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.present"></a>

- *Type:* str

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.startswith"></a>

- *Type:* str

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_proxied` <a name="reset_proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetProxied"></a>

```python
def reset_proxied() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_tag_match` <a name="reset_tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTagMatch"></a>

```python
def reset_tag_match() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference">DataCloudflareDnsRecordFilterCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.content">content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference">DataCloudflareDnsRecordFilterContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference">DataCloudflareDnsRecordFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference">DataCloudflareDnsRecordFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.commentInput">comment_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.contentInput">content_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.nameInput">name_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxiedInput">proxied_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatchInput">tag_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatch">tag_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.comment"></a>

```python
comment: DataCloudflareDnsRecordFilterCommentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference">DataCloudflareDnsRecordFilterCommentOutputReference</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.content"></a>

```python
content: DataCloudflareDnsRecordFilterContentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference">DataCloudflareDnsRecordFilterContentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.name"></a>

```python
name: DataCloudflareDnsRecordFilterNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference">DataCloudflareDnsRecordFilterNameOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tag"></a>

```python
tag: DataCloudflareDnsRecordFilterTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference">DataCloudflareDnsRecordFilterTagOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.commentInput"></a>

```python
comment_input: typing.Union[IResolvable, DataCloudflareDnsRecordFilterComment]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>]

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.contentInput"></a>

```python
content_input: typing.Union[IResolvable, DataCloudflareDnsRecordFilterContent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.nameInput"></a>

```python
name_input: typing.Union[IResolvable, DataCloudflareDnsRecordFilterName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `proxied_input`<sup>Optional</sup> <a name="proxied_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxiedInput"></a>

```python
proxied_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, DataCloudflareDnsRecordFilterTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>]

---

##### `tag_match_input`<sup>Optional</sup> <a name="tag_match_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatchInput"></a>

```python
tag_match_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `tag_match`<sup>Required</sup> <a name="tag_match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatch"></a>

```python
tag_match: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>]

---


### DataCloudflareDnsRecordFilterTagOutputReference <a name="DataCloudflareDnsRecordFilterTagOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetAbsent">reset_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absent` <a name="reset_absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetAbsent"></a>

```python
def reset_absent() -> None
```

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absentInput">absent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.presentInput">present_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absent">absent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.present">present</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absent_input`<sup>Optional</sup> <a name="absent_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absentInput"></a>

```python
absent_input: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.presentInput"></a>

```python
present_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `absent`<sup>Required</sup> <a name="absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absent"></a>

```python
absent: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.present"></a>

```python
present: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareDnsRecordFilterTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>]

---


### DataCloudflareDnsRecordSettingsOutputReference <a name="DataCloudflareDnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_record

dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.flattenCname">flatten_cname</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv4Only">ipv4_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv6Only">ipv6_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings">DataCloudflareDnsRecordSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flatten_cname`<sup>Required</sup> <a name="flatten_cname" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.flattenCname"></a>

```python
flatten_cname: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ipv4_only`<sup>Required</sup> <a name="ipv4_only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv4Only"></a>

```python
ipv4_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ipv6_only`<sup>Required</sup> <a name="ipv6_only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv6Only"></a>

```python
ipv6_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareDnsRecordSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings">DataCloudflareDnsRecordSettings</a>

---



