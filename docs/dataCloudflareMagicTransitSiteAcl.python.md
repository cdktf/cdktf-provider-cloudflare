# `dataCloudflareMagicTransitSiteAcl` Submodule <a name="`dataCloudflareMagicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteAcl <a name="DataCloudflareMagicTransitSiteAcl" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  acl_id: str,
  site_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.aclId">acl_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#account_id DataCloudflareMagicTransitSiteAcl#account_id}

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.aclId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#acl_id DataCloudflareMagicTransitSiteAcl#acl_id}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.siteId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#site_id DataCloudflareMagicTransitSiteAcl#site_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally">forward_locally</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional">unidirectional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput">acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId">acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forward_locally`<sup>Required</sup> <a name="forward_locally" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally"></a>

```python
forward_locally: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1"></a>

```python
lan1: DataCloudflareMagicTransitSiteAclLan1OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a>

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2"></a>

```python
lan2: DataCloudflareMagicTransitSiteAclLan2OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unidirectional`<sup>Required</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional"></a>

```python
unidirectional: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `acl_id_input`<sup>Optional</sup> <a name="acl_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput"></a>

```python
acl_id_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId"></a>

```python
acl_id: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteAclConfig <a name="DataCloudflareMagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  acl_id: str,
  site_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId">acl_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId">site_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#account_id DataCloudflareMagicTransitSiteAcl#account_id}

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId"></a>

```python
acl_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#acl_id DataCloudflareMagicTransitSiteAcl#acl_id}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#site_id DataCloudflareMagicTransitSiteAcl#site_id}

---

### DataCloudflareMagicTransitSiteAclLan1 <a name="DataCloudflareMagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1()
```


### DataCloudflareMagicTransitSiteAclLan2 <a name="DataCloudflareMagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteAclLan1OutputReference <a name="DataCloudflareMagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName">lan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `lan_name`<sup>Required</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitSiteAclLan1
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a>

---


### DataCloudflareMagicTransitSiteAclLan2OutputReference <a name="DataCloudflareMagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_site_acl

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName">lan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `lan_name`<sup>Required</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitSiteAclLan2
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a>

---



