# `dataCloudflareEmailSecurityImpersonationRegistries` Submodule <a name="`dataCloudflareEmailSecurityImpersonationRegistries` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityImpersonationRegistries <a name="DataCloudflareEmailSecurityImpersonationRegistries" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries cloudflare_email_security_impersonation_registries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries(
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
  provenance: str = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The sorting direction. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.order">order</a></code> | <code>str</code> | The field to sort by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.provenance">provenance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#provenance DataCloudflareEmailSecurityImpersonationRegistries#provenance}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.accountId"></a>

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#account_id DataCloudflareEmailSecurityImpersonationRegistries#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.direction"></a>

- *Type:* str

The sorting direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#direction DataCloudflareEmailSecurityImpersonationRegistries#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#max_items DataCloudflareEmailSecurityImpersonationRegistries#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.order"></a>

- *Type:* str

The field to sort by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#order DataCloudflareEmailSecurityImpersonationRegistries#order}

---

##### `provenance`<sup>Optional</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.provenance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#provenance DataCloudflareEmailSecurityImpersonationRegistries#provenance}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.search"></a>

- *Type:* str

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#search DataCloudflareEmailSecurityImpersonationRegistries#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetProvenance">reset_provenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_provenance` <a name="reset_provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetProvenance"></a>

```python
def reset_provenance() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailSecurityImpersonationRegistries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList">DataCloudflareEmailSecurityImpersonationRegistriesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenanceInput">provenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenance">provenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.result"></a>

```python
result: DataCloudflareEmailSecurityImpersonationRegistriesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList">DataCloudflareEmailSecurityImpersonationRegistriesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `provenance_input`<sup>Optional</sup> <a name="provenance_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenanceInput"></a>

```python
provenance_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenance"></a>

```python
provenance: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityImpersonationRegistriesConfig <a name="DataCloudflareEmailSecurityImpersonationRegistriesConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig(
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
  provenance: str = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.direction">direction</a></code> | <code>str</code> | The sorting direction. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.order">order</a></code> | <code>str</code> | The field to sort by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provenance">provenance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#provenance DataCloudflareEmailSecurityImpersonationRegistries#provenance}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#account_id DataCloudflareEmailSecurityImpersonationRegistries#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sorting direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#direction DataCloudflareEmailSecurityImpersonationRegistries#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#max_items DataCloudflareEmailSecurityImpersonationRegistries#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.order"></a>

```python
order: str
```

- *Type:* str

The field to sort by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#order DataCloudflareEmailSecurityImpersonationRegistries#order}

---

##### `provenance`<sup>Optional</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provenance"></a>

```python
provenance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#provenance DataCloudflareEmailSecurityImpersonationRegistries#provenance}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/email_security_impersonation_registries#search DataCloudflareEmailSecurityImpersonationRegistries#search}

---

### DataCloudflareEmailSecurityImpersonationRegistriesResult <a name="DataCloudflareEmailSecurityImpersonationRegistriesResult" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityImpersonationRegistriesResultList <a name="DataCloudflareEmailSecurityImpersonationRegistriesResultList" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference <a name="DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registries

dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryId">directory_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryNodeId">directory_node_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.externalDirectoryNodeId">external_directory_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.isEmailRegex">is_email_regex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.provenance">provenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult">DataCloudflareEmailSecurityImpersonationRegistriesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryId"></a>

```python
directory_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `directory_node_id`<sup>Required</sup> <a name="directory_node_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryNodeId"></a>

```python
directory_node_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `external_directory_node_id`<sup>Required</sup> <a name="external_directory_node_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.externalDirectoryNodeId"></a>

```python
external_directory_node_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_email_regex`<sup>Required</sup> <a name="is_email_regex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.isEmailRegex"></a>

```python
is_email_regex: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.provenance"></a>

```python
provenance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityImpersonationRegistriesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult">DataCloudflareEmailSecurityImpersonationRegistriesResult</a>

---



