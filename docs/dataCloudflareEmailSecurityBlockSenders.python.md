# `dataCloudflareEmailSecurityBlockSenders` Submodule <a name="`dataCloudflareEmailSecurityBlockSenders` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityBlockSenders <a name="DataCloudflareEmailSecurityBlockSenders" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders cloudflare_email_security_block_senders}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  direction: str = None,
  max_items: typing.Union[int, float] = None,
  order: str = None,
  pattern_type: str = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.order">order</a></code> | <code>str</code> | The field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.patternType">pattern_type</a></code> | <code>str</code> | Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.accountId"></a>

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#account_id DataCloudflareEmailSecurityBlockSenders#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.direction"></a>

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#direction DataCloudflareEmailSecurityBlockSenders#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#max_items DataCloudflareEmailSecurityBlockSenders#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.order"></a>

- *Type:* str

The field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#order DataCloudflareEmailSecurityBlockSenders#order}

---

##### `pattern_type`<sup>Optional</sup> <a name="pattern_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.patternType"></a>

- *Type:* str

Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.Initializer.parameter.search"></a>

- *Type:* str

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#search DataCloudflareEmailSecurityBlockSenders#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetPatternType">reset_pattern_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_pattern_type` <a name="reset_pattern_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetPatternType"></a>

```python
def reset_pattern_type() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSenders resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSenders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSenders to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailSecurityBlockSenders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSenders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList">DataCloudflareEmailSecurityBlockSendersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternTypeInput">pattern_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternType">pattern_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.result"></a>

```python
result: DataCloudflareEmailSecurityBlockSendersResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList">DataCloudflareEmailSecurityBlockSendersResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `pattern_type_input`<sup>Optional</sup> <a name="pattern_type_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternTypeInput"></a>

```python
pattern_type_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSenders.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityBlockSendersConfig <a name="DataCloudflareEmailSecurityBlockSendersConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  direction: str = None,
  max_items: typing.Union[int, float] = None,
  order: str = None,
  pattern_type: str = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.order">order</a></code> | <code>str</code> | The field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.patternType">pattern_type</a></code> | <code>str</code> | Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#account_id DataCloudflareEmailSecurityBlockSenders#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#direction DataCloudflareEmailSecurityBlockSenders#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#max_items DataCloudflareEmailSecurityBlockSenders#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.order"></a>

```python
order: str
```

- *Type:* str

The field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#order DataCloudflareEmailSecurityBlockSenders#order}

---

##### `pattern_type`<sup>Optional</sup> <a name="pattern_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/email_security_block_senders#search DataCloudflareEmailSecurityBlockSenders#search}

---

### DataCloudflareEmailSecurityBlockSendersResult <a name="DataCloudflareEmailSecurityBlockSendersResult" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityBlockSendersResultList <a name="DataCloudflareEmailSecurityBlockSendersResultList" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareEmailSecurityBlockSendersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareEmailSecurityBlockSendersResultOutputReference <a name="DataCloudflareEmailSecurityBlockSendersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_block_senders

dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.isRegex">is_regex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.patternType">pattern_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult">DataCloudflareEmailSecurityBlockSendersResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.isRegex"></a>

```python
is_regex: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityBlockSendersResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSenders.DataCloudflareEmailSecurityBlockSendersResult">DataCloudflareEmailSecurityBlockSendersResult</a>

---



