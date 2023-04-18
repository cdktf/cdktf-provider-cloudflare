# `cloudflare_waf_package`

Refer to the Terraform Registory for docs: [`cloudflare_waf_package`](https://www.terraform.io/docs/providers/cloudflare/r/waf_package).

# `wafPackage` Submodule <a name="`wafPackage` Submodule" id="@cdktf/provider-cloudflare.wafPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPackage <a name="WafPackage" id="@cdktf/provider-cloudflare.wafPackage.WafPackage"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package cloudflare_waf_package}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_package

wafPackage.WafPackage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  package_id: str,
  zone_id: str,
  action_mode: str = None,
  id: str = None,
  sensitivity: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.packageId">package_id</a></code> | <code>str</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.actionMode">action_mode</a></code> | <code>str</code> | Defaults to `challenge`. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.sensitivity">sensitivity</a></code> | <code>str</code> | Defaults to `high`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.packageId"></a>

- *Type:* str

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#package_id WafPackage#package_id}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#zone_id WafPackage#zone_id}

---

##### `action_mode`<sup>Optional</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.actionMode"></a>

- *Type:* str

Defaults to `challenge`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#action_mode WafPackage#action_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.sensitivity"></a>

- *Type:* str

Defaults to `high`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#sensitivity WafPackage#sensitivity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetActionMode">reset_action_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetSensitivity">reset_sensitivity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_action_mode` <a name="reset_action_mode" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetActionMode"></a>

```python
def reset_action_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sensitivity` <a name="reset_sensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetSensitivity"></a>

```python
def reset_sensitivity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_package

wafPackage.WafPackage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_package

wafPackage.WafPackage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_package

wafPackage.WafPackage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionModeInput">action_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageIdInput">package_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivityInput">sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionMode">action_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageId">package_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivity">sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_mode_input`<sup>Optional</sup> <a name="action_mode_input" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionModeInput"></a>

```python
action_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `package_id_input`<sup>Optional</sup> <a name="package_id_input" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageIdInput"></a>

```python
package_id_input: str
```

- *Type:* str

---

##### `sensitivity_input`<sup>Optional</sup> <a name="sensitivity_input" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivityInput"></a>

```python
sensitivity_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `action_mode`<sup>Required</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionMode"></a>

```python
action_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageId"></a>

```python
package_id: str
```

- *Type:* str

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivity"></a>

```python
sensitivity: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafPackageConfig <a name="WafPackageConfig" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_package

wafPackage.WafPackageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  package_id: str,
  zone_id: str,
  action_mode: str = None,
  id: str = None,
  sensitivity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.packageId">package_id</a></code> | <code>str</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.actionMode">action_mode</a></code> | <code>str</code> | Defaults to `challenge`. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.sensitivity">sensitivity</a></code> | <code>str</code> | Defaults to `high`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.packageId"></a>

```python
package_id: str
```

- *Type:* str

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#package_id WafPackage#package_id}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#zone_id WafPackage#zone_id}

---

##### `action_mode`<sup>Optional</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.actionMode"></a>

```python
action_mode: str
```

- *Type:* str

Defaults to `challenge`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#action_mode WafPackage#action_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.sensitivity"></a>

```python
sensitivity: str
```

- *Type:* str

Defaults to `high`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#sensitivity WafPackage#sensitivity}

---



