# `dataCloudflareUserAgentBlockingRule` Submodule <a name="`dataCloudflareUserAgentBlockingRule` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareUserAgentBlockingRule <a name="DataCloudflareUserAgentBlockingRule" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.NewDataCloudflareUserAgentBlockingRule(scope Construct, id *string, config DataCloudflareUserAgentBlockingRuleConfig) DataCloudflareUserAgentBlockingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig">DataCloudflareUserAgentBlockingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig">DataCloudflareUserAgentBlockingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetUaRuleId">ResetUaRuleId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter"></a>

```go
func PutFilter(value DataCloudflareUserAgentBlockingRuleFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetUaRuleId` <a name="ResetUaRuleId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetUaRuleId"></a>

```go
func ResetUaRuleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareUserAgentBlockingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareUserAgentBlockingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareUserAgentBlockingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference">DataCloudflareUserAgentBlockingRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference">DataCloudflareUserAgentBlockingRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.paused">Paused</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleIdInput">UaRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleId">UaRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.configuration"></a>

```go
func Configuration() DataCloudflareUserAgentBlockingRuleConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference">DataCloudflareUserAgentBlockingRuleConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filter"></a>

```go
func Filter() DataCloudflareUserAgentBlockingRuleFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference">DataCloudflareUserAgentBlockingRuleFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.paused"></a>

```go
func Paused() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `UaRuleIdInput`<sup>Optional</sup> <a name="UaRuleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleIdInput"></a>

```go
func UaRuleIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `UaRuleId`<sup>Required</sup> <a name="UaRuleId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleId"></a>

```go
func UaRuleId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareUserAgentBlockingRuleConfig <a name="DataCloudflareUserAgentBlockingRuleConfig" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

&datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter,
	UaRuleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.uaRuleId">UaRuleId</a></code> | <code>*string</code> | The unique identifier of the User Agent Blocking rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#zone_id DataCloudflareUserAgentBlockingRule#zone_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.filter"></a>

```go
Filter DataCloudflareUserAgentBlockingRuleFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}.

---

##### `UaRuleId`<sup>Optional</sup> <a name="UaRuleId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.uaRuleId"></a>

```go
UaRuleId *string
```

- *Type:* *string

The unique identifier of the User Agent Blocking rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#ua_rule_id DataCloudflareUserAgentBlockingRule#ua_rule_id}

---

### DataCloudflareUserAgentBlockingRuleConfiguration <a name="DataCloudflareUserAgentBlockingRuleConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

&datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRuleConfiguration {

}
```


### DataCloudflareUserAgentBlockingRuleFilter <a name="DataCloudflareUserAgentBlockingRuleFilter" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

&datacloudflareuseragentblockingrule.DataCloudflareUserAgentBlockingRuleFilter {
	Description: *string,
	Paused: interface{},
	UserAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.description">Description</a></code> | <code>*string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.paused">Paused</a></code> | <code>interface{}</code> | When true, indicates that the rule is currently paused. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.userAgent">UserAgent</a></code> | <code>*string</code> | A string to search for in the user agent values of existing rules. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.description"></a>

```go
Description *string
```

- *Type:* *string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#description DataCloudflareUserAgentBlockingRule#description}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

When true, indicates that the rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#paused DataCloudflareUserAgentBlockingRule#paused}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.userAgent"></a>

```go
UserAgent *string
```

- *Type:* *string

A string to search for in the user agent values of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/user_agent_blocking_rule#user_agent DataCloudflareUserAgentBlockingRule#user_agent}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareUserAgentBlockingRuleConfigurationOutputReference <a name="DataCloudflareUserAgentBlockingRuleConfigurationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.NewDataCloudflareUserAgentBlockingRuleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareUserAgentBlockingRuleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration">DataCloudflareUserAgentBlockingRuleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareUserAgentBlockingRuleConfiguration
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration">DataCloudflareUserAgentBlockingRuleConfiguration</a>

---


### DataCloudflareUserAgentBlockingRuleFilterOutputReference <a name="DataCloudflareUserAgentBlockingRuleFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrule"

datacloudflareuseragentblockingrule.NewDataCloudflareUserAgentBlockingRuleFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareUserAgentBlockingRuleFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetUserAgent">ResetUserAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetUserAgent"></a>

```go
func ResetUserAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgentInput">UserAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgent">UserAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgentInput"></a>

```go
func UserAgentInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `UserAgent`<sup>Required</sup> <a name="UserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgent"></a>

```go
func UserAgent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



