# `dataCloudflareEmailSecurityImpersonationRegistry` Submodule <a name="`dataCloudflareEmailSecurityImpersonationRegistry` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityImpersonationRegistry <a name="DataCloudflareEmailSecurityImpersonationRegistry" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry(
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
  display_name_id: typing.Union[int, float] = None,
  filter: DataCloudflareEmailSecurityImpersonationRegistryFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.displayNameId">display_name_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.accountId"></a>

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#account_id DataCloudflareEmailSecurityImpersonationRegistry#account_id}

---

##### `display_name_id`<sup>Optional</sup> <a name="display_name_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.displayNameId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetDisplayNameId">reset_display_name_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  order: str = None,
  provenance: str = None,
  search: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter.parameter.direction"></a>

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#direction DataCloudflareEmailSecurityImpersonationRegistry#direction}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter.parameter.order"></a>

- *Type:* str

The field to sort by. Available values: "name", "email", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#order DataCloudflareEmailSecurityImpersonationRegistry#order}

---

###### `provenance`<sup>Optional</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter.parameter.provenance"></a>

- *Type:* str

Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#provenance DataCloudflareEmailSecurityImpersonationRegistry#provenance}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter.parameter.search"></a>

- *Type:* str

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#search DataCloudflareEmailSecurityImpersonationRegistry#search}

---

##### `reset_display_name_id` <a name="reset_display_name_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetDisplayNameId"></a>

```python
def reset_display_name_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailSecurityImpersonationRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryId">directory_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryNodeId">directory_node_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.externalDirectoryNodeId">external_directory_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference">DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.isEmailRegex">is_email_regex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provenance">provenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameIdInput">display_name_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameId">display_name_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryId"></a>

```python
directory_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `directory_node_id`<sup>Required</sup> <a name="directory_node_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryNodeId"></a>

```python
directory_node_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `external_directory_node_id`<sup>Required</sup> <a name="external_directory_node_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.externalDirectoryNodeId"></a>

```python
external_directory_node_id: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filter"></a>

```python
filter: DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference">DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_email_regex`<sup>Required</sup> <a name="is_email_regex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.isEmailRegex"></a>

```python
is_email_regex: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provenance"></a>

```python
provenance: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `display_name_id_input`<sup>Optional</sup> <a name="display_name_id_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameIdInput"></a>

```python
display_name_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareEmailSecurityImpersonationRegistryFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `display_name_id`<sup>Required</sup> <a name="display_name_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameId"></a>

```python
display_name_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityImpersonationRegistryConfig <a name="DataCloudflareEmailSecurityImpersonationRegistryConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  display_name_id: typing.Union[int, float] = None,
  filter: DataCloudflareEmailSecurityImpersonationRegistryFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.displayNameId">display_name_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#account_id DataCloudflareEmailSecurityImpersonationRegistry#account_id}

---

##### `display_name_id`<sup>Optional</sup> <a name="display_name_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.displayNameId"></a>

```python
display_name_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.filter"></a>

```python
filter: DataCloudflareEmailSecurityImpersonationRegistryFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}.

---

### DataCloudflareEmailSecurityImpersonationRegistryFilter <a name="DataCloudflareEmailSecurityImpersonationRegistryFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter(
  direction: str = None,
  order: str = None,
  provenance: str = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.order">order</a></code> | <code>str</code> | The field to sort by. Available values: "name", "email", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.provenance">provenance</a></code> | <code>str</code> | Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.search">search</a></code> | <code>str</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#direction DataCloudflareEmailSecurityImpersonationRegistry#direction}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.order"></a>

```python
order: str
```

- *Type:* str

The field to sort by. Available values: "name", "email", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#order DataCloudflareEmailSecurityImpersonationRegistry#order}

---

##### `provenance`<sup>Optional</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.provenance"></a>

```python
provenance: str
```

- *Type:* str

Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#provenance DataCloudflareEmailSecurityImpersonationRegistry#provenance}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/email_security_impersonation_registry#search DataCloudflareEmailSecurityImpersonationRegistry#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference <a name="DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_security_impersonation_registry

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetProvenance">reset_provenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_provenance` <a name="reset_provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetProvenance"></a>

```python
def reset_provenance() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenanceInput">provenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenance">provenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `provenance_input`<sup>Optional</sup> <a name="provenance_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenanceInput"></a>

```python
provenance_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenance"></a>

```python
provenance: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareEmailSecurityImpersonationRegistryFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>]

---



