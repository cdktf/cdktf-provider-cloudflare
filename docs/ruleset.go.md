# `ruleset` Submodule <a name="`ruleset` Submodule" id="@cdktf/provider-cloudflare.ruleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruleset <a name="Ruleset" id="@cdktf/provider-cloudflare.ruleset.Ruleset"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset cloudflare_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRuleset(scope Construct, id *string, config RulesetConfig) Ruleset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig">RulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig">RulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName">ResetShareableEntitlementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetId"></a>

```go
func ResetId()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules"></a>

```go
func ResetRules()
```

##### `ResetShareableEntitlementName` <a name="ResetShareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName"></a>

```go
func ResetShareableEntitlementName()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.Ruleset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.Ruleset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.Ruleset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput">PhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput">ShareableEntitlementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName">ShareableEntitlementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules"></a>

```go
func Rules() RulesetRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput"></a>

```go
func PhaseInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `ShareableEntitlementNameInput`<sup>Optional</sup> <a name="ShareableEntitlementNameInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput"></a>

```go
func ShareableEntitlementNameInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `ShareableEntitlementName`<sup>Required</sup> <a name="ShareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName"></a>

```go
func ShareableEntitlementName() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetConfig <a name="RulesetConfig" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Kind: *string,
	Name: *string,
	Phase: *string,
	AccountId: *string,
	Description: *string,
	Id: *string,
	Rules: interface{},
	ShareableEntitlementName: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind">Kind</a></code> | <code>*string</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name">Name</a></code> | <code>*string</code> | Name of the ruleset. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase">Phase</a></code> | <code>*string</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description">Description</a></code> | <code>*string</code> | Brief summary of the ruleset and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName">ShareableEntitlementName</a></code> | <code>*string</code> | Name of entitlement that is shareable between entities. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ruleset. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase"></a>

```go
Phase *string
```

- *Type:* *string

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Brief summary of the ruleset and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `ShareableEntitlementName`<sup>Optional</sup> <a name="ShareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName"></a>

```go
ShareableEntitlementName *string
```

- *Type:* *string

Name of entitlement that is shareable between entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}

---

### RulesetRules <a name="RulesetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRules {
	Expression: *string,
	Action: *string,
	ActionParameters: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParameters,
	Description: *string,
	Enabled: interface{},
	ExposedCredentialCheck: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesExposedCredentialCheck,
	LastUpdated: *string,
	Logging: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesLogging,
	Ratelimit: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesRatelimit,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression">Expression</a></code> | <code>*string</code> | Criteria for an HTTP request to trigger the ruleset rule action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action">Action</a></code> | <code>*string</code> | Action to perform in the ruleset rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters">ActionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | action_parameters block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description">Description</a></code> | <code>*string</code> | Brief summary of the ruleset rule and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the rule is active. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck">ExposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | exposed_credential_check block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | The most recent update to this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit">Ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | ratelimit block. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Criteria for an HTTP request to trigger the ruleset rule action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to perform in the ruleset rule.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `ActionParameters`<sup>Optional</sup> <a name="ActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters"></a>

```go
ActionParameters RulesetRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

action_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action_parameters Ruleset#action_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Brief summary of the ruleset rule and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the rule is active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `ExposedCredentialCheck`<sup>Optional</sup> <a name="ExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck"></a>

```go
ExposedCredentialCheck RulesetRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

exposed_credential_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exposed_credential_check Ruleset#exposed_credential_check}

---

##### `LastUpdated`<sup>Optional</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated"></a>

```go
LastUpdated *string
```

- *Type:* *string

The most recent update to this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#last_updated Ruleset#last_updated}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging"></a>

```go
Logging RulesetRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#logging Ruleset#logging}

---

##### `Ratelimit`<sup>Optional</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit"></a>

```go
Ratelimit RulesetRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

ratelimit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ratelimit Ruleset#ratelimit}

---

### RulesetRulesActionParameters <a name="RulesetRulesActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParameters {
	AutomaticHttpsRewrites: interface{},
	Autominify: interface{},
	Bic: interface{},
	BrowserTtl: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl,
	Cache: interface{},
	CacheKey: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKey,
	Content: *string,
	ContentType: *string,
	CookieFields: *[]*string,
	DisableApps: interface{},
	DisableRailgun: interface{},
	DisableZaraz: interface{},
	EdgeTtl: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl,
	EmailObfuscation: interface{},
	FromList: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersFromList,
	FromValue: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersFromValue,
	Headers: interface{},
	HostHeader: *string,
	HotlinkProtection: interface{},
	Id: *string,
	Increment: *f64,
	MatchedData: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersMatchedData,
	Mirage: interface{},
	OpportunisticEncryption: interface{},
	Origin: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersOrigin,
	OriginErrorPagePassthru: interface{},
	Overrides: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersOverrides,
	Phases: *[]*string,
	Polish: *string,
	Products: *[]*string,
	RequestFields: *[]*string,
	RespectStrongEtags: interface{},
	Response: interface{},
	ResponseFields: *[]*string,
	RocketLoader: interface{},
	Rules: *map[string]*string,
	Ruleset: *string,
	Rulesets: *[]*string,
	SecurityLevel: *string,
	ServerSideExcludes: interface{},
	ServeStale: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersServeStale,
	Sni: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersSni,
	Ssl: *string,
	StatusCode: *f64,
	Sxg: interface{},
	Uri: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersUri,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>interface{}</code> | Turn on or off Cloudflare Automatic HTTPS rewrites. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify">Autominify</a></code> | <code>interface{}</code> | autominify block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic">Bic</a></code> | <code>interface{}</code> | Inspect the visitor's browser for headers commonly associated with spammers and certain bots. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl">BrowserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | browser_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache">Cache</a></code> | <code>interface{}</code> | Whether to cache if expression matches. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey">CacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | cache_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content">Content</a></code> | <code>*string</code> | Content of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType">ContentType</a></code> | <code>*string</code> | Content-Type of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields">CookieFields</a></code> | <code>*[]*string</code> | List of cookie values to include as part of custom fields logging. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps">DisableApps</a></code> | <code>interface{}</code> | Turn off all active Cloudflare Apps. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun">DisableRailgun</a></code> | <code>interface{}</code> | Turn off railgun feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz">DisableZaraz</a></code> | <code>interface{}</code> | Turn off zaraz feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl">EdgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | edge_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation">EmailObfuscation</a></code> | <code>interface{}</code> | Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList">FromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | from_list block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue">FromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | from_value block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader">HostHeader</a></code> | <code>*string</code> | Host Header that request origin receives. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection">HotlinkProtection</a></code> | <code>interface{}</code> | Turn on or off the hotlink protection feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id">Id</a></code> | <code>*string</code> | Identifier of the action parameter to modify. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment">Increment</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData">MatchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | matched_data block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage">Mirage</a></code> | <code>interface{}</code> | Turn on or off Cloudflare Mirage of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>interface{}</code> | Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | origin block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru">OriginErrorPagePassthru</a></code> | <code>interface{}</code> | Pass-through error page for origin. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases">Phases</a></code> | <code>*[]*string</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish">Polish</a></code> | <code>*string</code> | Apply options from the Polish feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products">Products</a></code> | <code>*[]*string</code> | Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields">RequestFields</a></code> | <code>*[]*string</code> | List of request headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags">RespectStrongEtags</a></code> | <code>interface{}</code> | Respect strong ETags. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response">Response</a></code> | <code>interface{}</code> | response block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields">ResponseFields</a></code> | <code>*[]*string</code> | List of response headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader">RocketLoader</a></code> | <code>interface{}</code> | Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules">Rules</a></code> | <code>*map[string]*string</code> | Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset">Ruleset</a></code> | <code>*string</code> | Which ruleset ID to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets">Rulesets</a></code> | <code>*[]*string</code> | List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Control options for the Security Level feature from the Security app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes">ServerSideExcludes</a></code> | <code>interface{}</code> | Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale">ServeStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | serve_stale block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni">Sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | sni block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl">Ssl</a></code> | <code>*string</code> | Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode">StatusCode</a></code> | <code>*f64</code> | HTTP status code of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg">Sxg</a></code> | <code>interface{}</code> | Turn on or off the SXG feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri">Uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | uri block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version">Version</a></code> | <code>*string</code> | Version of the ruleset to deploy. |

---

##### `AutomaticHttpsRewrites`<sup>Optional</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites"></a>

```go
AutomaticHttpsRewrites interface{}
```

- *Type:* interface{}

Turn on or off Cloudflare Automatic HTTPS rewrites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}

---

##### `Autominify`<sup>Optional</sup> <a name="Autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify"></a>

```go
Autominify interface{}
```

- *Type:* interface{}

autominify block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#autominify Ruleset#autominify}

---

##### `Bic`<sup>Optional</sup> <a name="Bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic"></a>

```go
Bic interface{}
```

- *Type:* interface{}

Inspect the visitor's browser for headers commonly associated with spammers and certain bots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#bic Ruleset#bic}

---

##### `BrowserTtl`<sup>Optional</sup> <a name="BrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl"></a>

```go
BrowserTtl RulesetRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

browser_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#browser_ttl Ruleset#browser_ttl}

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache"></a>

```go
Cache interface{}
```

- *Type:* interface{}

Whether to cache if expression matches.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache Ruleset#cache}

---

##### `CacheKey`<sup>Optional</sup> <a name="CacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey"></a>

```go
CacheKey RulesetRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

cache_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_key Ruleset#cache_key}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content"></a>

```go
Content *string
```

- *Type:* *string

Content of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Content-Type of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `CookieFields`<sup>Optional</sup> <a name="CookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields"></a>

```go
CookieFields *[]*string
```

- *Type:* *[]*string

List of cookie values to include as part of custom fields logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie_fields Ruleset#cookie_fields}

---

##### `DisableApps`<sup>Optional</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps"></a>

```go
DisableApps interface{}
```

- *Type:* interface{}

Turn off all active Cloudflare Apps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_apps Ruleset#disable_apps}

---

##### `DisableRailgun`<sup>Optional</sup> <a name="DisableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun"></a>

```go
DisableRailgun interface{}
```

- *Type:* interface{}

Turn off railgun feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_railgun Ruleset#disable_railgun}

---

##### `DisableZaraz`<sup>Optional</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz"></a>

```go
DisableZaraz interface{}
```

- *Type:* interface{}

Turn off zaraz feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_zaraz Ruleset#disable_zaraz}

---

##### `EdgeTtl`<sup>Optional</sup> <a name="EdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl"></a>

```go
EdgeTtl RulesetRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

edge_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#edge_ttl Ruleset#edge_ttl}

---

##### `EmailObfuscation`<sup>Optional</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation"></a>

```go
EmailObfuscation interface{}
```

- *Type:* interface{}

Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#email_obfuscation Ruleset#email_obfuscation}

---

##### `FromList`<sup>Optional</sup> <a name="FromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList"></a>

```go
FromList RulesetRulesActionParametersFromList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

from_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_list Ruleset#from_list}

---

##### `FromValue`<sup>Optional</sup> <a name="FromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue"></a>

```go
FromValue RulesetRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

from_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_value Ruleset#from_value}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#headers Ruleset#headers}

---

##### `HostHeader`<sup>Optional</sup> <a name="HostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader"></a>

```go
HostHeader *string
```

- *Type:* *string

Host Header that request origin receives.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host_header Ruleset#host_header}

---

##### `HotlinkProtection`<sup>Optional</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection"></a>

```go
HotlinkProtection interface{}
```

- *Type:* interface{}

Turn on or off the hotlink protection feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#hotlink_protection Ruleset#hotlink_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier of the action parameter to modify.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Increment`<sup>Optional</sup> <a name="Increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment"></a>

```go
Increment *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}.

---

##### `MatchedData`<sup>Optional</sup> <a name="MatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData"></a>

```go
MatchedData RulesetRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

matched_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#matched_data Ruleset#matched_data}

---

##### `Mirage`<sup>Optional</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage"></a>

```go
Mirage interface{}
```

- *Type:* interface{}

Turn on or off Cloudflare Mirage of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mirage Ruleset#mirage}

---

##### `OpportunisticEncryption`<sup>Optional</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption"></a>

```go
OpportunisticEncryption interface{}
```

- *Type:* interface{}

Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin"></a>

```go
Origin RulesetRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}

---

##### `OriginErrorPagePassthru`<sup>Optional</sup> <a name="OriginErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru"></a>

```go
OriginErrorPagePassthru interface{}
```

- *Type:* interface{}

Pass-through error page for origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides"></a>

```go
Overrides RulesetRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#overrides Ruleset#overrides}

---

##### `Phases`<sup>Optional</sup> <a name="Phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases"></a>

```go
Phases *[]*string
```

- *Type:* *[]*string

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}

---

##### `Polish`<sup>Optional</sup> <a name="Polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish"></a>

```go
Polish *string
```

- *Type:* *string

Apply options from the Polish feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#polish Ruleset#polish}

---

##### `Products`<sup>Optional</sup> <a name="Products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products"></a>

```go
Products *[]*string
```

- *Type:* *[]*string

Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}

---

##### `RequestFields`<sup>Optional</sup> <a name="RequestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields"></a>

```go
RequestFields *[]*string
```

- *Type:* *[]*string

List of request headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#request_fields Ruleset#request_fields}

---

##### `RespectStrongEtags`<sup>Optional</sup> <a name="RespectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags"></a>

```go
RespectStrongEtags interface{}
```

- *Type:* interface{}

Respect strong ETags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#respect_strong_etags Ruleset#respect_strong_etags}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response"></a>

```go
Response interface{}
```

- *Type:* interface{}

response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response Ruleset#response}

---

##### `ResponseFields`<sup>Optional</sup> <a name="ResponseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields"></a>

```go
ResponseFields *[]*string
```

- *Type:* *[]*string

List of response headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response_fields Ruleset#response_fields}

---

##### `RocketLoader`<sup>Optional</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader"></a>

```go
RocketLoader interface{}
```

- *Type:* interface{}

Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rocket_loader Ruleset#rocket_loader}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules"></a>

```go
Rules *map[string]*string
```

- *Type:* *map[string]*string

Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs.

Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `Ruleset`<sup>Optional</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset"></a>

```go
Ruleset *string
```

- *Type:* *string

Which ruleset ID to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}

---

##### `Rulesets`<sup>Optional</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets"></a>

```go
Rulesets *[]*string
```

- *Type:* *[]*string

List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Control options for the Security Level feature from the Security app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#security_level Ruleset#security_level}

---

##### `ServerSideExcludes`<sup>Optional</sup> <a name="ServerSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes"></a>

```go
ServerSideExcludes interface{}
```

- *Type:* interface{}

Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#server_side_excludes Ruleset#server_side_excludes}

---

##### `ServeStale`<sup>Optional</sup> <a name="ServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale"></a>

```go
ServeStale RulesetRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

serve_stale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#serve_stale Ruleset#serve_stale}

---

##### `Sni`<sup>Optional</sup> <a name="Sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni"></a>

```go
Sni RulesetRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

sni block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sni Ruleset#sni}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl"></a>

```go
Ssl *string
```

- *Type:* *string

Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ssl Ruleset#ssl}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

HTTP status code of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `Sxg`<sup>Optional</sup> <a name="Sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg"></a>

```go
Sxg interface{}
```

- *Type:* interface{}

Turn on or off the SXG feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sxg Ruleset#sxg}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri"></a>

```go
Uri RulesetRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

uri block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#uri Ruleset#uri}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the ruleset to deploy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}

---

### RulesetRulesActionParametersAutominify <a name="RulesetRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersAutominify {
	Css: interface{},
	Html: interface{},
	Js: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css">Css</a></code> | <code>interface{}</code> | SSL minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html">Html</a></code> | <code>interface{}</code> | HTML minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js">Js</a></code> | <code>interface{}</code> | JS minification. |

---

##### `Css`<sup>Optional</sup> <a name="Css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css"></a>

```go
Css interface{}
```

- *Type:* interface{}

SSL minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#css Ruleset#css}

---

##### `Html`<sup>Optional</sup> <a name="Html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html"></a>

```go
Html interface{}
```

- *Type:* interface{}

HTML minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#html Ruleset#html}

---

##### `Js`<sup>Optional</sup> <a name="Js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js"></a>

```go
Js interface{}
```

- *Type:* interface{}

JS minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#js Ruleset#js}

---

### RulesetRulesActionParametersBrowserTtl <a name="RulesetRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersBrowserTtl {
	Mode: *string,
	Default: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode">Mode</a></code> | <code>*string</code> | Mode of the browser TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default">Default</a></code> | <code>*f64</code> | Default browser TTL. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Mode of the browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default"></a>

```go
Default *f64
```

- *Type:* *f64

Default browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

### RulesetRulesActionParametersCacheKey <a name="RulesetRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKey {
	CacheByDeviceType: interface{},
	CacheDeceptionArmor: interface{},
	CustomKey: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey,
	IgnoreQueryStringsOrder: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>interface{}</code> | Cache by device type. Conflicts with "custom_key.user.device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>interface{}</code> | Cache deception armor. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey">CustomKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | custom_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder">IgnoreQueryStringsOrder</a></code> | <code>interface{}</code> | Ignore query strings order. |

---

##### `CacheByDeviceType`<sup>Optional</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType"></a>

```go
CacheByDeviceType interface{}
```

- *Type:* interface{}

Cache by device type. Conflicts with "custom_key.user.device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_by_device_type Ruleset#cache_by_device_type}

---

##### `CacheDeceptionArmor`<sup>Optional</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor"></a>

```go
CacheDeceptionArmor interface{}
```

- *Type:* interface{}

Cache deception armor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_deception_armor Ruleset#cache_deception_armor}

---

##### `CustomKey`<sup>Optional</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey"></a>

```go
CustomKey RulesetRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

custom_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#custom_key Ruleset#custom_key}

---

##### `IgnoreQueryStringsOrder`<sup>Optional</sup> <a name="IgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder"></a>

```go
IgnoreQueryStringsOrder interface{}
```

- *Type:* interface{}

Ignore query strings order.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}

---

### RulesetRulesActionParametersCacheKeyCustomKey <a name="RulesetRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKeyCustomKey {
	Cookie: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie,
	Header: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader,
	Host: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost,
	QueryString: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString,
	User: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | user block. |

---

##### `Cookie`<sup>Optional</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie"></a>

```go
Cookie RulesetRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie Ruleset#cookie}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header"></a>

```go
Header RulesetRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#header Ruleset#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host"></a>

```go
Host RulesetRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

host block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString"></a>

```go
QueryString RulesetRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query_string Ruleset#query_string}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user"></a>

```go
User RulesetRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#user Ruleset#user}

---

### RulesetRulesActionParametersCacheKeyCustomKeyCookie <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie {
	CheckPresence: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | List of cookies to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include">Include</a></code> | <code>*[]*string</code> | List of cookies to include in the custom key. |

---

##### `CheckPresence`<sup>Optional</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence"></a>

```go
CheckPresence *[]*string
```

- *Type:* *[]*string

List of cookies to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

List of cookies to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHeader <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader {
	CheckPresence: *[]*string,
	ExcludeOrigin: interface{},
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | List of headers to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin">ExcludeOrigin</a></code> | <code>interface{}</code> | Exclude the origin header from the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include">Include</a></code> | <code>*[]*string</code> | List of headers to include in the custom key. |

---

##### `CheckPresence`<sup>Optional</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence"></a>

```go
CheckPresence *[]*string
```

- *Type:* *[]*string

List of headers to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `ExcludeOrigin`<sup>Optional</sup> <a name="ExcludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin"></a>

```go
ExcludeOrigin interface{}
```

- *Type:* interface{}

Exclude the origin header from the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude_origin Ruleset#exclude_origin}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

List of headers to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHost <a name="RulesetRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost {
	Resolved: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved">Resolved</a></code> | <code>interface{}</code> | Resolve hostname to IP address. |

---

##### `Resolved`<sup>Optional</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved"></a>

```go
Resolved interface{}
```

- *Type:* interface{}

Resolve hostname to IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#resolved Ruleset#resolved}

---

### RulesetRulesActionParametersCacheKeyCustomKeyQueryString <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString {
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude">Exclude</a></code> | <code>*[]*string</code> | List of query string parameters to exclude from the custom key. Conflicts with "include". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include">Include</a></code> | <code>*[]*string</code> | List of query string parameters to include in the custom key. Conflicts with "exclude". |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

List of query string parameters to exclude from the custom key. Conflicts with "include".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude Ruleset#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

List of query string parameters to include in the custom key. Conflicts with "exclude".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyUser <a name="RulesetRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser {
	DeviceType: interface{},
	Geo: interface{},
	Lang: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType">DeviceType</a></code> | <code>interface{}</code> | Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo">Geo</a></code> | <code>interface{}</code> | Add geo data to the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang">Lang</a></code> | <code>interface{}</code> | Add language data to the custom key. |

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType"></a>

```go
DeviceType interface{}
```

- *Type:* interface{}

Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#device_type Ruleset#device_type}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo"></a>

```go
Geo interface{}
```

- *Type:* interface{}

Add geo data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#geo Ruleset#geo}

---

##### `Lang`<sup>Optional</sup> <a name="Lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang"></a>

```go
Lang interface{}
```

- *Type:* interface{}

Add language data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#lang Ruleset#lang}

---

### RulesetRulesActionParametersEdgeTtl <a name="RulesetRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersEdgeTtl {
	Mode: *string,
	Default: *f64,
	StatusCodeTtl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode">Mode</a></code> | <code>*string</code> | Mode of the edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default">Default</a></code> | <code>*f64</code> | Default edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl">StatusCodeTtl</a></code> | <code>interface{}</code> | status_code_ttl block. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Mode of the edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default"></a>

```go
Default *f64
```

- *Type:* *f64

Default edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

##### `StatusCodeTtl`<sup>Optional</sup> <a name="StatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl"></a>

```go
StatusCodeTtl interface{}
```

- *Type:* interface{}

status_code_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_ttl Ruleset#status_code_ttl}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtl <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl {
	Value: *f64,
	StatusCode: *f64,
	StatusCodeRange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value">Value</a></code> | <code>*f64</code> | Status code edge TTL value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode">StatusCode</a></code> | <code>*f64</code> | Status code for which the edge TTL is applied. Conflicts with "status_code_range". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange">StatusCodeRange</a></code> | <code>interface{}</code> | status_code_range block. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Status code edge TTL value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

Status code for which the edge TTL is applied. Conflicts with "status_code_range".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `StatusCodeRange`<sup>Optional</sup> <a name="StatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange"></a>

```go
StatusCodeRange interface{}
```

- *Type:* interface{}

status_code_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_range Ruleset#status_code_range}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
	From: *f64,
	To: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from">From</a></code> | <code>*f64</code> | From status code. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to">To</a></code> | <code>*f64</code> | To status code. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from"></a>

```go
From *f64
```

- *Type:* *f64

From status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from Ruleset#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to"></a>

```go
To *f64
```

- *Type:* *f64

To status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#to Ruleset#to}

---

### RulesetRulesActionParametersFromList <a name="RulesetRulesActionParametersFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersFromList {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key">Key</a></code> | <code>*string</code> | Expression to use for the list lookup. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name">Name</a></code> | <code>*string</code> | Name of the list. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key"></a>

```go
Key *string
```

- *Type:* *string

Expression to use for the list lookup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#key Ruleset#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

### RulesetRulesActionParametersFromValue <a name="RulesetRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersFromValue {
	PreserveQueryString: interface{},
	StatusCode: *f64,
	TargetUrl: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString">PreserveQueryString</a></code> | <code>interface{}</code> | Preserve query string for redirect URL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode">StatusCode</a></code> | <code>*f64</code> | Status code for redirect. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl">TargetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | target_url block. |

---

##### `PreserveQueryString`<sup>Optional</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString"></a>

```go
PreserveQueryString interface{}
```

- *Type:* interface{}

Preserve query string for redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#preserve_query_string Ruleset#preserve_query_string}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

Status code for redirect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl"></a>

```go
TargetUrl RulesetRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

target_url block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#target_url Ruleset#target_url}

---

### RulesetRulesActionParametersFromValueTargetUrl <a name="RulesetRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersFromValueTargetUrl {
	Expression: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression">Expression</a></code> | <code>*string</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value">Value</a></code> | <code>*string</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value"></a>

```go
Value *string
```

- *Type:* *string

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersHeaders <a name="RulesetRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersHeaders {
	Expression: *string,
	Name: *string,
	Operation: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression">Expression</a></code> | <code>*string</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name">Name</a></code> | <code>*string</code> | Name of the HTTP request header to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation">Operation</a></code> | <code>*string</code> | Action to perform on the HTTP request header. Available values: `remove`, `set`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value">Value</a></code> | <code>*string</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the HTTP request header to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

Action to perform on the HTTP request header. Available values: `remove`, `set`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#operation Ruleset#operation}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersMatchedData <a name="RulesetRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersMatchedData {
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public key to use within WAF Ruleset payload logging to view the HTTP request parameters. |

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public key to use within WAF Ruleset payload logging to view the HTTP request parameters.

You can generate a public key [using the `matched-data-cli` command-line tool](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/command-line/generate-key-pair) or [in the Cloudflare dashboard](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/configure).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#public_key Ruleset#public_key}

---

### RulesetRulesActionParametersOrigin <a name="RulesetRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersOrigin {
	Host: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host">Host</a></code> | <code>*string</code> | Origin Hostname where request is sent. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port">Port</a></code> | <code>*f64</code> | Origin Port where request is sent. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host"></a>

```go
Host *string
```

- *Type:* *string

Origin Hostname where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Origin Port where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#port Ruleset#port}

---

### RulesetRulesActionParametersOverrides <a name="RulesetRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersOverrides {
	Action: *string,
	Categories: interface{},
	Enabled: interface{},
	Rules: interface{},
	SensitivityLevel: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action">Action</a></code> | <code>*string</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories">Categories</a></code> | <code>interface{}</code> | categories block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled">Enabled</a></code> | <code>interface{}</code> | Defines if the current ruleset-level override enables or disables the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel">SensitivityLevel</a></code> | <code>*string</code> | Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status">Status</a></code> | <code>*string</code> | Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories"></a>

```go
Categories interface{}
```

- *Type:* interface{}

categories block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#categories Ruleset#categories}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Defines if the current ruleset-level override enables or disables the ruleset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `SensitivityLevel`<sup>Optional</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel"></a>

```go
SensitivityLevel *string
```

- *Type:* *string

Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status"></a>

```go
Status *string
```

- *Type:* *string

Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesCategories <a name="RulesetRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersOverridesCategories {
	Action: *string,
	Category: *string,
	Enabled: interface{},
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action">Action</a></code> | <code>*string</code> | Action to perform in the tag-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category">Category</a></code> | <code>*string</code> | Tag name to apply the ruleset rule override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled">Enabled</a></code> | <code>interface{}</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status">Status</a></code> | <code>*string</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to perform in the tag-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category"></a>

```go
Category *string
```

- *Type:* *string

Tag name to apply the ruleset rule override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#category Ruleset#category}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status"></a>

```go
Status *string
```

- *Type:* *string

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesRules <a name="RulesetRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersOverridesRules {
	Action: *string,
	Enabled: interface{},
	Id: *string,
	ScoreThreshold: *f64,
	SensitivityLevel: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action">Action</a></code> | <code>*string</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled">Enabled</a></code> | <code>interface{}</code> | Defines if the current rule-level override enables or disables the rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id">Id</a></code> | <code>*string</code> | Rule ID to apply the override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel">SensitivityLevel</a></code> | <code>*string</code> | Sensitivity level for a ruleset rule override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status">Status</a></code> | <code>*string</code> | Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Defines if the current rule-level override enables or disables the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id"></a>

```go
Id *string
```

- *Type:* *string

Rule ID to apply the override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScoreThreshold`<sup>Optional</sup> <a name="ScoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold"></a>

```go
ScoreThreshold *f64
```

- *Type:* *f64

Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_threshold Ruleset#score_threshold}

---

##### `SensitivityLevel`<sup>Optional</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel"></a>

```go
SensitivityLevel *string
```

- *Type:* *string

Sensitivity level for a ruleset rule override.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status"></a>

```go
Status *string
```

- *Type:* *string

Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersResponse <a name="RulesetRulesActionParametersResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersResponse {
	Content: *string,
	ContentType: *string,
	StatusCode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content">Content</a></code> | <code>*string</code> | Body content to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType">ContentType</a></code> | <code>*string</code> | HTTP content type to send in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode">StatusCode</a></code> | <code>*f64</code> | HTTP status code to send in the response. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content"></a>

```go
Content *string
```

- *Type:* *string

Body content to include in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

HTTP content type to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

HTTP status code to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

### RulesetRulesActionParametersServeStale <a name="RulesetRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersServeStale {
	DisableStaleWhileUpdating: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating">DisableStaleWhileUpdating</a></code> | <code>interface{}</code> | Disable stale while updating. |

---

##### `DisableStaleWhileUpdating`<sup>Optional</sup> <a name="DisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating"></a>

```go
DisableStaleWhileUpdating interface{}
```

- *Type:* interface{}

Disable stale while updating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}

---

### RulesetRulesActionParametersSni <a name="RulesetRulesActionParametersSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersSni {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value">Value</a></code> | <code>*string</code> | Value to define for SNI. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value to define for SNI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUri <a name="RulesetRulesActionParametersUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersUri {
	Origin: interface{},
	Path: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersUriPath,
	Query: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.ruleset.RulesetRulesActionParametersUriQuery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin">Origin</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path">Path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | path block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query">Query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | query block. |

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin"></a>

```go
Origin interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path"></a>

```go
Path RulesetRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#path Ruleset#path}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query"></a>

```go
Query RulesetRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query Ruleset#query}

---

### RulesetRulesActionParametersUriPath <a name="RulesetRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersUriPath {
	Expression: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression">Expression</a></code> | <code>*string</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value">Value</a></code> | <code>*string</code> | Static string value of the updated URI path or query string component. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value"></a>

```go
Value *string
```

- *Type:* *string

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUriQuery <a name="RulesetRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesActionParametersUriQuery {
	Expression: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression">Expression</a></code> | <code>*string</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value">Value</a></code> | <code>*string</code> | Static string value of the updated URI path or query string component. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value"></a>

```go
Value *string
```

- *Type:* *string

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesExposedCredentialCheck <a name="RulesetRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesExposedCredentialCheck {
	PasswordExpression: *string,
	UsernameExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression">PasswordExpression</a></code> | <code>*string</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression">UsernameExpression</a></code> | <code>*string</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value. |

---

##### `PasswordExpression`<sup>Optional</sup> <a name="PasswordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression"></a>

```go
PasswordExpression *string
```

- *Type:* *string

Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}

---

##### `UsernameExpression`<sup>Optional</sup> <a name="UsernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression"></a>

```go
UsernameExpression *string
```

- *Type:* *string

Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#username_expression Ruleset#username_expression}

---

### RulesetRulesLogging <a name="RulesetRulesLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesLogging {
	Enabled: interface{},
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled">Enabled</a></code> | <code>interface{}</code> | Override the default logging behavior when a rule is matched. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status">Status</a></code> | <code>*string</code> | Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Override the default logging behavior when a rule is matched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status"></a>

```go
Status *string
```

- *Type:* *string

Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesRatelimit <a name="RulesetRulesRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

&ruleset.RulesetRulesRatelimit {
	Characteristics: *[]*string,
	CountingExpression: *string,
	MitigationTimeout: *f64,
	Period: *f64,
	RequestsPerPeriod: *f64,
	RequestsToOrigin: interface{},
	ScorePerPeriod: *f64,
	ScoreResponseHeaderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics">Characteristics</a></code> | <code>*[]*string</code> | List of parameters that define how Cloudflare tracks the request rate for this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression">CountingExpression</a></code> | <code>*string</code> | Criteria for counting HTTP requests to trigger the Rate Limiting action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout">MitigationTimeout</a></code> | <code>*f64</code> | Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period">Period</a></code> | <code>*f64</code> | The period of time to consider (in seconds) when evaluating the request rate. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod">RequestsPerPeriod</a></code> | <code>*f64</code> | The number of requests over the period of time that will trigger the Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin">RequestsToOrigin</a></code> | <code>interface{}</code> | Whether to include requests to origin within the Rate Limiting count. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod">ScorePerPeriod</a></code> | <code>*f64</code> | The maximum aggregate score over the period of time that will trigger Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName">ScoreResponseHeaderName</a></code> | <code>*string</code> | Name of HTTP header in the response, set by the origin server, with the score for the current request. |

---

##### `Characteristics`<sup>Optional</sup> <a name="Characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics"></a>

```go
Characteristics *[]*string
```

- *Type:* *[]*string

List of parameters that define how Cloudflare tracks the request rate for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}

---

##### `CountingExpression`<sup>Optional</sup> <a name="CountingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression"></a>

```go
CountingExpression *string
```

- *Type:* *string

Criteria for counting HTTP requests to trigger the Rate Limiting action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}

---

##### `MitigationTimeout`<sup>Optional</sup> <a name="MitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout"></a>

```go
MitigationTimeout *f64
```

- *Type:* *f64

Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The period of time to consider (in seconds) when evaluating the request rate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}

---

##### `RequestsPerPeriod`<sup>Optional</sup> <a name="RequestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod"></a>

```go
RequestsPerPeriod *f64
```

- *Type:* *f64

The number of requests over the period of time that will trigger the Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}

---

##### `RequestsToOrigin`<sup>Optional</sup> <a name="RequestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin"></a>

```go
RequestsToOrigin interface{}
```

- *Type:* interface{}

Whether to include requests to origin within the Rate Limiting count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_to_origin Ruleset#requests_to_origin}

---

##### `ScorePerPeriod`<sup>Optional</sup> <a name="ScorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod"></a>

```go
ScorePerPeriod *f64
```

- *Type:* *f64

The maximum aggregate score over the period of time that will trigger Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_per_period Ruleset#score_per_period}

---

##### `ScoreResponseHeaderName`<sup>Optional</sup> <a name="ScoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName"></a>

```go
ScoreResponseHeaderName *string
```

- *Type:* *string

Name of HTTP header in the response, set by the origin server, with the score for the current request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_response_header_name Ruleset#score_response_header_name}

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRulesActionParametersAutominifyList <a name="RulesetRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersAutominifyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersAutominifyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersAutominifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersAutominifyOutputReference <a name="RulesetRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersAutominifyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersAutominifyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss">ResetCss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml">ResetHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs">ResetJs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCss` <a name="ResetCss" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss"></a>

```go
func ResetCss()
```

##### `ResetHtml` <a name="ResetHtml" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml"></a>

```go
func ResetHtml()
```

##### `ResetJs` <a name="ResetJs" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs"></a>

```go
func ResetJs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput">CssInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput">HtmlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput">JsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css">Css</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html">Html</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js">Js</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CssInput`<sup>Optional</sup> <a name="CssInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput"></a>

```go
func CssInput() interface{}
```

- *Type:* interface{}

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput"></a>

```go
func HtmlInput() interface{}
```

- *Type:* interface{}

---

##### `JsInput`<sup>Optional</sup> <a name="JsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput"></a>

```go
func JsInput() interface{}
```

- *Type:* interface{}

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css"></a>

```go
func Css() interface{}
```

- *Type:* interface{}

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html"></a>

```go
func Html() interface{}
```

- *Type:* interface{}

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js"></a>

```go
func Js() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersBrowserTtlOutputReference <a name="RulesetRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersBrowserTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersBrowserTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default">Default</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```go
func Default() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence">ResetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckPresence` <a name="ResetCheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence"></a>

```go
func ResetCheckPresence()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput">CheckPresenceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresenceInput`<sup>Optional</sup> <a name="CheckPresenceInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput"></a>

```go
func CheckPresenceInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```go
func CheckPresence() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence">ResetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin">ResetExcludeOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckPresence` <a name="ResetCheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence"></a>

```go
func ResetCheckPresence()
```

##### `ResetExcludeOrigin` <a name="ResetExcludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin"></a>

```go
func ResetExcludeOrigin()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput">CheckPresenceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput">ExcludeOriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">ExcludeOrigin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresenceInput`<sup>Optional</sup> <a name="CheckPresenceInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput"></a>

```go
func CheckPresenceInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeOriginInput`<sup>Optional</sup> <a name="ExcludeOriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput"></a>

```go
func ExcludeOriginInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```go
func CheckPresence() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeOrigin`<sup>Required</sup> <a name="ExcludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```go
func ExcludeOrigin() interface{}
```

- *Type:* interface{}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved">ResetResolved</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResolved` <a name="ResetResolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved"></a>

```go
func ResetResolved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput">ResolvedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">Resolved</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolvedInput`<sup>Optional</sup> <a name="ResolvedInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput"></a>

```go
func ResolvedInput() interface{}
```

- *Type:* interface{}

---

##### `Resolved`<sup>Required</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```go
func Resolved() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyCustomKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyCustomKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie">PutCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie">ResetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookie` <a name="PutCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie"></a>

```go
func PutCookie(value RulesetRulesActionParametersCacheKeyCustomKeyCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader"></a>

```go
func PutHeader(value RulesetRulesActionParametersCacheKeyCustomKeyHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost"></a>

```go
func PutHost(value RulesetRulesActionParametersCacheKeyCustomKeyHost)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString"></a>

```go
func PutQueryString(value RulesetRulesActionParametersCacheKeyCustomKeyQueryString)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `PutUser` <a name="PutUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser"></a>

```go
func PutUser(value RulesetRulesActionParametersCacheKeyCustomKeyUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `ResetCookie` <a name="ResetCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie"></a>

```go
func ResetCookie()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput">CookieInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput">HeaderInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput">HostInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cookie`<sup>Required</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```go
func Cookie() RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```go
func Header() RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```go
func Host() RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```go
func QueryString() RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```go
func User() RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a>

---

##### `CookieInput`<sup>Optional</sup> <a name="CookieInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput"></a>

```go
func CookieInput() RulesetRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput"></a>

```go
func HeaderInput() RulesetRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput"></a>

```go
func HostInput() RulesetRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() RulesetRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput"></a>

```go
func UserInput() RulesetRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang">ResetLang</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo"></a>

```go
func ResetGeo()
```

##### `ResetLang` <a name="ResetLang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang"></a>

```go
func ResetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput">GeoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput">LangInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">DeviceType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">Geo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">Lang</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() interface{}
```

- *Type:* interface{}

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput"></a>

```go
func GeoInput() interface{}
```

- *Type:* interface{}

---

##### `LangInput`<sup>Optional</sup> <a name="LangInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput"></a>

```go
func LangInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```go
func DeviceType() interface{}
```

- *Type:* interface{}

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```go
func Geo() interface{}
```

- *Type:* interface{}

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```go
func Lang() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---


### RulesetRulesActionParametersCacheKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersCacheKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersCacheKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey">PutCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType">ResetCacheByDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor">ResetCacheDeceptionArmor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey">ResetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder">ResetIgnoreQueryStringsOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomKey` <a name="PutCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey"></a>

```go
func PutCustomKey(value RulesetRulesActionParametersCacheKeyCustomKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `ResetCacheByDeviceType` <a name="ResetCacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType"></a>

```go
func ResetCacheByDeviceType()
```

##### `ResetCacheDeceptionArmor` <a name="ResetCacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor"></a>

```go
func ResetCacheDeceptionArmor()
```

##### `ResetCustomKey` <a name="ResetCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey"></a>

```go
func ResetCustomKey()
```

##### `ResetIgnoreQueryStringsOrder` <a name="ResetIgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder"></a>

```go
func ResetIgnoreQueryStringsOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey">CustomKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput">CacheByDeviceTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput">CacheDeceptionArmorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput">CustomKeyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput">IgnoreQueryStringsOrderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">IgnoreQueryStringsOrder</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```go
func CustomKey() RulesetRulesActionParametersCacheKeyCustomKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a>

---

##### `CacheByDeviceTypeInput`<sup>Optional</sup> <a name="CacheByDeviceTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput"></a>

```go
func CacheByDeviceTypeInput() interface{}
```

- *Type:* interface{}

---

##### `CacheDeceptionArmorInput`<sup>Optional</sup> <a name="CacheDeceptionArmorInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput"></a>

```go
func CacheDeceptionArmorInput() interface{}
```

- *Type:* interface{}

---

##### `CustomKeyInput`<sup>Optional</sup> <a name="CustomKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput"></a>

```go
func CustomKeyInput() RulesetRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `IgnoreQueryStringsOrderInput`<sup>Optional</sup> <a name="IgnoreQueryStringsOrderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput"></a>

```go
func IgnoreQueryStringsOrderInput() interface{}
```

- *Type:* interface{}

---

##### `CacheByDeviceType`<sup>Required</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```go
func CacheByDeviceType() interface{}
```

- *Type:* interface{}

---

##### `CacheDeceptionArmor`<sup>Required</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```go
func CacheDeceptionArmor() interface{}
```

- *Type:* interface{}

---

##### `IgnoreQueryStringsOrder`<sup>Required</sup> <a name="IgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```go
func IgnoreQueryStringsOrder() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---


### RulesetRulesActionParametersEdgeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersEdgeTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersEdgeTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl">PutStatusCodeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl">ResetStatusCodeTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStatusCodeTtl` <a name="PutStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl"></a>

```go
func PutStatusCodeTtl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetStatusCodeTtl` <a name="ResetStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl"></a>

```go
func ResetStatusCodeTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">StatusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput">StatusCodeTtlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default">Default</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCodeTtl`<sup>Required</sup> <a name="StatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```go
func StatusCodeTtl() RulesetRulesActionParametersEdgeTtlStatusCodeTtlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `StatusCodeTtlInput`<sup>Optional</sup> <a name="StatusCodeTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput"></a>

```go
func StatusCodeTtlInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```go
func Default() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersEdgeTtlStatusCodeTtlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersEdgeTtlStatusCodeTtlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange">PutStatusCodeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange">ResetStatusCodeRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStatusCodeRange` <a name="PutStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange"></a>

```go
func PutStatusCodeRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetStatusCodeRange` <a name="ResetStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange"></a>

```go
func ResetStatusCodeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">StatusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput">StatusCodeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCodeRange`<sup>Required</sup> <a name="StatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```go
func StatusCodeRange() RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `StatusCodeRangeInput`<sup>Optional</sup> <a name="StatusCodeRangeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput"></a>

```go
func StatusCodeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput">FromInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput">ToInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">From</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">To</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput"></a>

```go
func FromInput() *f64
```

- *Type:* *f64

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput"></a>

```go
func ToInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```go
func From() *f64
```

- *Type:* *f64

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```go
func To() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersFromListOutputReference <a name="RulesetRulesActionParametersFromListOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersFromListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersFromListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersFromList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---


### RulesetRulesActionParametersFromValueOutputReference <a name="RulesetRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersFromValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersFromValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl">PutTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString">ResetPreserveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetUrl` <a name="PutTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl"></a>

```go
func PutTargetUrl(value RulesetRulesActionParametersFromValueTargetUrl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `ResetPreserveQueryString` <a name="ResetPreserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString"></a>

```go
func ResetPreserveQueryString()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl"></a>

```go
func ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl">TargetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput">PreserveQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```go
func TargetUrl() RulesetRulesActionParametersFromValueTargetUrlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a>

---

##### `PreserveQueryStringInput`<sup>Optional</sup> <a name="PreserveQueryStringInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput"></a>

```go
func PreserveQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() RulesetRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```go
func PreserveQueryString() interface{}
```

- *Type:* interface{}

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---


### RulesetRulesActionParametersFromValueTargetUrlOutputReference <a name="RulesetRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersFromValueTargetUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersFromValueTargetUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---


### RulesetRulesActionParametersHeadersList <a name="RulesetRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersHeadersOutputReference <a name="RulesetRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation"></a>

```go
func ResetOperation()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersMatchedDataOutputReference <a name="RulesetRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersMatchedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersMatchedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey"></a>

```go
func ResetPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---


### RulesetRulesActionParametersOriginOutputReference <a name="RulesetRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---


### RulesetRulesActionParametersOutputReference <a name="RulesetRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify">PutAutominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl">PutBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey">PutCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl">PutEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList">PutFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue">PutFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData">PutMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse">PutResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale">PutServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni">PutSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri">PutUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites">ResetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify">ResetAutominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic">ResetBic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl">ResetBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey">ResetCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields">ResetCookieFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps">ResetDisableApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun">ResetDisableRailgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz">ResetDisableZaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl">ResetEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation">ResetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList">ResetFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue">ResetFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader">ResetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection">ResetHotlinkProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement">ResetIncrement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData">ResetMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage">ResetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption">ResetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru">ResetOriginErrorPagePassthru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases">ResetPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish">ResetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts">ResetProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields">ResetRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags">ResetRespectStrongEtags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields">ResetResponseFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader">ResetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset">ResetRuleset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets">ResetRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes">ResetServerSideExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale">ResetServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni">ResetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg">ResetSxg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri">ResetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutominify` <a name="PutAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify"></a>

```go
func PutAutominify(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBrowserTtl` <a name="PutBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl"></a>

```go
func PutBrowserTtl(value RulesetRulesActionParametersBrowserTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `PutCacheKey` <a name="PutCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey"></a>

```go
func PutCacheKey(value RulesetRulesActionParametersCacheKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `PutEdgeTtl` <a name="PutEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl"></a>

```go
func PutEdgeTtl(value RulesetRulesActionParametersEdgeTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `PutFromList` <a name="PutFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList"></a>

```go
func PutFromList(value RulesetRulesActionParametersFromList)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `PutFromValue` <a name="PutFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue"></a>

```go
func PutFromValue(value RulesetRulesActionParametersFromValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchedData` <a name="PutMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData"></a>

```go
func PutMatchedData(value RulesetRulesActionParametersMatchedData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin"></a>

```go
func PutOrigin(value RulesetRulesActionParametersOrigin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides"></a>

```go
func PutOverrides(value RulesetRulesActionParametersOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `PutResponse` <a name="PutResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse"></a>

```go
func PutResponse(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServeStale` <a name="PutServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale"></a>

```go
func PutServeStale(value RulesetRulesActionParametersServeStale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `PutSni` <a name="PutSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni"></a>

```go
func PutSni(value RulesetRulesActionParametersSni)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `PutUri` <a name="PutUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri"></a>

```go
func PutUri(value RulesetRulesActionParametersUri)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `ResetAutomaticHttpsRewrites` <a name="ResetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites"></a>

```go
func ResetAutomaticHttpsRewrites()
```

##### `ResetAutominify` <a name="ResetAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify"></a>

```go
func ResetAutominify()
```

##### `ResetBic` <a name="ResetBic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic"></a>

```go
func ResetBic()
```

##### `ResetBrowserTtl` <a name="ResetBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl"></a>

```go
func ResetBrowserTtl()
```

##### `ResetCache` <a name="ResetCache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache"></a>

```go
func ResetCache()
```

##### `ResetCacheKey` <a name="ResetCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey"></a>

```go
func ResetCacheKey()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCookieFields` <a name="ResetCookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields"></a>

```go
func ResetCookieFields()
```

##### `ResetDisableApps` <a name="ResetDisableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps"></a>

```go
func ResetDisableApps()
```

##### `ResetDisableRailgun` <a name="ResetDisableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun"></a>

```go
func ResetDisableRailgun()
```

##### `ResetDisableZaraz` <a name="ResetDisableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz"></a>

```go
func ResetDisableZaraz()
```

##### `ResetEdgeTtl` <a name="ResetEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl"></a>

```go
func ResetEdgeTtl()
```

##### `ResetEmailObfuscation` <a name="ResetEmailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation"></a>

```go
func ResetEmailObfuscation()
```

##### `ResetFromList` <a name="ResetFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList"></a>

```go
func ResetFromList()
```

##### `ResetFromValue` <a name="ResetFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue"></a>

```go
func ResetFromValue()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHostHeader` <a name="ResetHostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader"></a>

```go
func ResetHostHeader()
```

##### `ResetHotlinkProtection` <a name="ResetHotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection"></a>

```go
func ResetHotlinkProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIncrement` <a name="ResetIncrement" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement"></a>

```go
func ResetIncrement()
```

##### `ResetMatchedData` <a name="ResetMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData"></a>

```go
func ResetMatchedData()
```

##### `ResetMirage` <a name="ResetMirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage"></a>

```go
func ResetMirage()
```

##### `ResetOpportunisticEncryption` <a name="ResetOpportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption"></a>

```go
func ResetOpportunisticEncryption()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetOriginErrorPagePassthru` <a name="ResetOriginErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru"></a>

```go
func ResetOriginErrorPagePassthru()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides"></a>

```go
func ResetOverrides()
```

##### `ResetPhases` <a name="ResetPhases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases"></a>

```go
func ResetPhases()
```

##### `ResetPolish` <a name="ResetPolish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish"></a>

```go
func ResetPolish()
```

##### `ResetProducts` <a name="ResetProducts" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts"></a>

```go
func ResetProducts()
```

##### `ResetRequestFields` <a name="ResetRequestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields"></a>

```go
func ResetRequestFields()
```

##### `ResetRespectStrongEtags` <a name="ResetRespectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags"></a>

```go
func ResetRespectStrongEtags()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse"></a>

```go
func ResetResponse()
```

##### `ResetResponseFields` <a name="ResetResponseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields"></a>

```go
func ResetResponseFields()
```

##### `ResetRocketLoader` <a name="ResetRocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader"></a>

```go
func ResetRocketLoader()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules"></a>

```go
func ResetRules()
```

##### `ResetRuleset` <a name="ResetRuleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset"></a>

```go
func ResetRuleset()
```

##### `ResetRulesets` <a name="ResetRulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets"></a>

```go
func ResetRulesets()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetServerSideExcludes` <a name="ResetServerSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes"></a>

```go
func ResetServerSideExcludes()
```

##### `ResetServeStale` <a name="ResetServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale"></a>

```go
func ResetServeStale()
```

##### `ResetSni` <a name="ResetSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni"></a>

```go
func ResetSni()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetSxg` <a name="ResetSxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg"></a>

```go
func ResetSxg()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri"></a>

```go
func ResetUri()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify">Autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl">BrowserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey">CacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl">EdgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList">FromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue">FromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData">MatchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response">Response</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale">ServeStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni">Sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri">Uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput">AutomaticHttpsRewritesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput">AutominifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput">BicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput">BrowserTtlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput">CacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput">CacheKeyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput">CookieFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput">DisableAppsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput">DisableRailgunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput">DisableZarazInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput">EdgeTtlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput">EmailObfuscationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput">FromListInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput">FromValueInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput">HotlinkProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput">IncrementInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput">MatchedDataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput">MirageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput">OpportunisticEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput">OriginErrorPagePassthruInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput">OriginInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput">OverridesInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput">PhasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput">PolishInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput">ProductsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput">RequestFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput">RespectStrongEtagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput">ResponseFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput">ResponseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput">RocketLoaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput">RulesetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput">RulesetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput">RulesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput">ServerSideExcludesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput">ServeStaleInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput">SniInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput">SslInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput">SxgInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput">UriInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic">Bic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache">Cache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields">CookieFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps">DisableApps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun">DisableRailgun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz">DisableZaraz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader">HostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment">Increment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage">Mirage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru">OriginErrorPagePassthru</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases">Phases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish">Polish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields">RequestFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags">RespectStrongEtags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields">ResponseFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules">Rules</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset">Ruleset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets">Rulesets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes">ServerSideExcludes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl">Ssl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg">Sxg</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autominify`<sup>Required</sup> <a name="Autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify"></a>

```go
func Autominify() RulesetRulesActionParametersAutominifyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a>

---

##### `BrowserTtl`<sup>Required</sup> <a name="BrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl"></a>

```go
func BrowserTtl() RulesetRulesActionParametersBrowserTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a>

---

##### `CacheKey`<sup>Required</sup> <a name="CacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey"></a>

```go
func CacheKey() RulesetRulesActionParametersCacheKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a>

---

##### `EdgeTtl`<sup>Required</sup> <a name="EdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl"></a>

```go
func EdgeTtl() RulesetRulesActionParametersEdgeTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a>

---

##### `FromList`<sup>Required</sup> <a name="FromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList"></a>

```go
func FromList() RulesetRulesActionParametersFromListOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a>

---

##### `FromValue`<sup>Required</sup> <a name="FromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue"></a>

```go
func FromValue() RulesetRulesActionParametersFromValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers"></a>

```go
func Headers() RulesetRulesActionParametersHeadersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a>

---

##### `MatchedData`<sup>Required</sup> <a name="MatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData"></a>

```go
func MatchedData() RulesetRulesActionParametersMatchedDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin"></a>

```go
func Origin() RulesetRulesActionParametersOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides"></a>

```go
func Overrides() RulesetRulesActionParametersOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a>

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response"></a>

```go
func Response() RulesetRulesActionParametersResponseList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a>

---

##### `ServeStale`<sup>Required</sup> <a name="ServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale"></a>

```go
func ServeStale() RulesetRulesActionParametersServeStaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a>

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni"></a>

```go
func Sni() RulesetRulesActionParametersSniOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri"></a>

```go
func Uri() RulesetRulesActionParametersUriOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a>

---

##### `AutomaticHttpsRewritesInput`<sup>Optional</sup> <a name="AutomaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput"></a>

```go
func AutomaticHttpsRewritesInput() interface{}
```

- *Type:* interface{}

---

##### `AutominifyInput`<sup>Optional</sup> <a name="AutominifyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput"></a>

```go
func AutominifyInput() interface{}
```

- *Type:* interface{}

---

##### `BicInput`<sup>Optional</sup> <a name="BicInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput"></a>

```go
func BicInput() interface{}
```

- *Type:* interface{}

---

##### `BrowserTtlInput`<sup>Optional</sup> <a name="BrowserTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput"></a>

```go
func BrowserTtlInput() RulesetRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput"></a>

```go
func CacheInput() interface{}
```

- *Type:* interface{}

---

##### `CacheKeyInput`<sup>Optional</sup> <a name="CacheKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput"></a>

```go
func CacheKeyInput() RulesetRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CookieFieldsInput`<sup>Optional</sup> <a name="CookieFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput"></a>

```go
func CookieFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisableAppsInput`<sup>Optional</sup> <a name="DisableAppsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput"></a>

```go
func DisableAppsInput() interface{}
```

- *Type:* interface{}

---

##### `DisableRailgunInput`<sup>Optional</sup> <a name="DisableRailgunInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput"></a>

```go
func DisableRailgunInput() interface{}
```

- *Type:* interface{}

---

##### `DisableZarazInput`<sup>Optional</sup> <a name="DisableZarazInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput"></a>

```go
func DisableZarazInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeTtlInput`<sup>Optional</sup> <a name="EdgeTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput"></a>

```go
func EdgeTtlInput() RulesetRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `EmailObfuscationInput`<sup>Optional</sup> <a name="EmailObfuscationInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput"></a>

```go
func EmailObfuscationInput() interface{}
```

- *Type:* interface{}

---

##### `FromListInput`<sup>Optional</sup> <a name="FromListInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput"></a>

```go
func FromListInput() RulesetRulesActionParametersFromList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `FromValueInput`<sup>Optional</sup> <a name="FromValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput"></a>

```go
func FromValueInput() RulesetRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput"></a>

```go
func HostHeaderInput() *string
```

- *Type:* *string

---

##### `HotlinkProtectionInput`<sup>Optional</sup> <a name="HotlinkProtectionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput"></a>

```go
func HotlinkProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncrementInput`<sup>Optional</sup> <a name="IncrementInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput"></a>

```go
func IncrementInput() *f64
```

- *Type:* *f64

---

##### `MatchedDataInput`<sup>Optional</sup> <a name="MatchedDataInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput"></a>

```go
func MatchedDataInput() RulesetRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `MirageInput`<sup>Optional</sup> <a name="MirageInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput"></a>

```go
func MirageInput() interface{}
```

- *Type:* interface{}

---

##### `OpportunisticEncryptionInput`<sup>Optional</sup> <a name="OpportunisticEncryptionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput"></a>

```go
func OpportunisticEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `OriginErrorPagePassthruInput`<sup>Optional</sup> <a name="OriginErrorPagePassthruInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput"></a>

```go
func OriginErrorPagePassthruInput() interface{}
```

- *Type:* interface{}

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput"></a>

```go
func OriginInput() RulesetRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput"></a>

```go
func OverridesInput() RulesetRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `PhasesInput`<sup>Optional</sup> <a name="PhasesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput"></a>

```go
func PhasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolishInput`<sup>Optional</sup> <a name="PolishInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput"></a>

```go
func PolishInput() *string
```

- *Type:* *string

---

##### `ProductsInput`<sup>Optional</sup> <a name="ProductsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput"></a>

```go
func ProductsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestFieldsInput`<sup>Optional</sup> <a name="RequestFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput"></a>

```go
func RequestFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RespectStrongEtagsInput`<sup>Optional</sup> <a name="RespectStrongEtagsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput"></a>

```go
func RespectStrongEtagsInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseFieldsInput`<sup>Optional</sup> <a name="ResponseFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput"></a>

```go
func ResponseFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput"></a>

```go
func ResponseInput() interface{}
```

- *Type:* interface{}

---

##### `RocketLoaderInput`<sup>Optional</sup> <a name="RocketLoaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput"></a>

```go
func RocketLoaderInput() interface{}
```

- *Type:* interface{}

---

##### `RulesetInput`<sup>Optional</sup> <a name="RulesetInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput"></a>

```go
func RulesetInput() *string
```

- *Type:* *string

---

##### `RulesetsInput`<sup>Optional</sup> <a name="RulesetsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput"></a>

```go
func RulesetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput"></a>

```go
func RulesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `ServerSideExcludesInput`<sup>Optional</sup> <a name="ServerSideExcludesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput"></a>

```go
func ServerSideExcludesInput() interface{}
```

- *Type:* interface{}

---

##### `ServeStaleInput`<sup>Optional</sup> <a name="ServeStaleInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput"></a>

```go
func ServeStaleInput() RulesetRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `SniInput`<sup>Optional</sup> <a name="SniInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput"></a>

```go
func SniInput() RulesetRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput"></a>

```go
func SslInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `SxgInput`<sup>Optional</sup> <a name="SxgInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput"></a>

```go
func SxgInput() interface{}
```

- *Type:* interface{}

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput"></a>

```go
func UriInput() RulesetRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```go
func AutomaticHttpsRewrites() interface{}
```

- *Type:* interface{}

---

##### `Bic`<sup>Required</sup> <a name="Bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic"></a>

```go
func Bic() interface{}
```

- *Type:* interface{}

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache"></a>

```go
func Cache() interface{}
```

- *Type:* interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CookieFields`<sup>Required</sup> <a name="CookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields"></a>

```go
func CookieFields() *[]*string
```

- *Type:* *[]*string

---

##### `DisableApps`<sup>Required</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps"></a>

```go
func DisableApps() interface{}
```

- *Type:* interface{}

---

##### `DisableRailgun`<sup>Required</sup> <a name="DisableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun"></a>

```go
func DisableRailgun() interface{}
```

- *Type:* interface{}

---

##### `DisableZaraz`<sup>Required</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz"></a>

```go
func DisableZaraz() interface{}
```

- *Type:* interface{}

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation"></a>

```go
func EmailObfuscation() interface{}
```

- *Type:* interface{}

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader"></a>

```go
func HostHeader() *string
```

- *Type:* *string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```go
func HotlinkProtection() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Increment`<sup>Required</sup> <a name="Increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment"></a>

```go
func Increment() *f64
```

- *Type:* *f64

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage"></a>

```go
func Mirage() interface{}
```

- *Type:* interface{}

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```go
func OpportunisticEncryption() interface{}
```

- *Type:* interface{}

---

##### `OriginErrorPagePassthru`<sup>Required</sup> <a name="OriginErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```go
func OriginErrorPagePassthru() interface{}
```

- *Type:* interface{}

---

##### `Phases`<sup>Required</sup> <a name="Phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases"></a>

```go
func Phases() *[]*string
```

- *Type:* *[]*string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish"></a>

```go
func Polish() *string
```

- *Type:* *string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `RequestFields`<sup>Required</sup> <a name="RequestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields"></a>

```go
func RequestFields() *[]*string
```

- *Type:* *[]*string

---

##### `RespectStrongEtags`<sup>Required</sup> <a name="RespectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```go
func RespectStrongEtags() interface{}
```

- *Type:* interface{}

---

##### `ResponseFields`<sup>Required</sup> <a name="ResponseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields"></a>

```go
func ResponseFields() *[]*string
```

- *Type:* *[]*string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader"></a>

```go
func RocketLoader() interface{}
```

- *Type:* interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules"></a>

```go
func Rules() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset"></a>

```go
func Ruleset() *string
```

- *Type:* *string

---

##### `Rulesets`<sup>Required</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets"></a>

```go
func Rulesets() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `ServerSideExcludes`<sup>Required</sup> <a name="ServerSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```go
func ServerSideExcludes() interface{}
```

- *Type:* interface{}

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl"></a>

```go
func Ssl() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `Sxg`<sup>Required</sup> <a name="Sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg"></a>

```go
func Sxg() interface{}
```

- *Type:* interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---


### RulesetRulesActionParametersOverridesCategoriesList <a name="RulesetRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOverridesCategoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersOverridesCategoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersOverridesCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersOverridesCategoriesOutputReference <a name="RulesetRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOverridesCategoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersOverridesCategoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersOverridesOutputReference <a name="RulesetRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories">PutCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel">ResetSensitivityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCategories` <a name="PutCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories"></a>

```go
func PutCategories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules"></a>

```go
func ResetRules()
```

##### `ResetSensitivityLevel` <a name="ResetSensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel"></a>

```go
func ResetSensitivityLevel()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories">Categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput">SensitivityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories"></a>

```go
func Categories() RulesetRulesActionParametersOverridesCategoriesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules"></a>

```go
func Rules() RulesetRulesActionParametersOverridesRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput"></a>

```go
func CategoriesInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `SensitivityLevelInput`<sup>Optional</sup> <a name="SensitivityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput"></a>

```go
func SensitivityLevelInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```go
func SensitivityLevel() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---


### RulesetRulesActionParametersOverridesRulesList <a name="RulesetRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOverridesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersOverridesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersOverridesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersOverridesRulesOutputReference <a name="RulesetRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersOverridesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersOverridesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold">ResetScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel">ResetSensitivityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetScoreThreshold` <a name="ResetScoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold"></a>

```go
func ResetScoreThreshold()
```

##### `ResetSensitivityLevel` <a name="ResetSensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel"></a>

```go
func ResetSensitivityLevel()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput">ScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput">SensitivityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScoreThresholdInput`<sup>Optional</sup> <a name="ScoreThresholdInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput"></a>

```go
func ScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `SensitivityLevelInput`<sup>Optional</sup> <a name="SensitivityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput"></a>

```go
func SensitivityLevelInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```go
func ScoreThreshold() *f64
```

- *Type:* *f64

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```go
func SensitivityLevel() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersResponseList <a name="RulesetRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesActionParametersResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get"></a>

```go
func Get(index *f64) RulesetRulesActionParametersResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersResponseOutputReference <a name="RulesetRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesActionParametersResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesActionParametersServeStaleOutputReference <a name="RulesetRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersServeStaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersServeStaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating">ResetDisableStaleWhileUpdating</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableStaleWhileUpdating` <a name="ResetDisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating"></a>

```go
func ResetDisableStaleWhileUpdating()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput">DisableStaleWhileUpdatingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">DisableStaleWhileUpdating</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableStaleWhileUpdatingInput`<sup>Optional</sup> <a name="DisableStaleWhileUpdatingInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput"></a>

```go
func DisableStaleWhileUpdatingInput() interface{}
```

- *Type:* interface{}

---

##### `DisableStaleWhileUpdating`<sup>Required</sup> <a name="DisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```go
func DisableStaleWhileUpdating() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---


### RulesetRulesActionParametersSniOutputReference <a name="RulesetRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersSniOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersSniOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---


### RulesetRulesActionParametersUriOutputReference <a name="RulesetRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath">PutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPath` <a name="PutPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath"></a>

```go
func PutPath(value RulesetRulesActionParametersUriPath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery"></a>

```go
func PutQuery(value RulesetRulesActionParametersUriQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput">OriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput">PathInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin">Origin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path"></a>

```go
func Path() RulesetRulesActionParametersUriPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query"></a>

```go
func Query() RulesetRulesActionParametersUriQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a>

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput"></a>

```go
func OriginInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput"></a>

```go
func PathInput() RulesetRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput"></a>

```go
func QueryInput() RulesetRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin"></a>

```go
func Origin() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---


### RulesetRulesActionParametersUriPathOutputReference <a name="RulesetRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersUriPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersUriPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---


### RulesetRulesActionParametersUriQueryOutputReference <a name="RulesetRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesActionParametersUriQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesActionParametersUriQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---


### RulesetRulesExposedCredentialCheckOutputReference <a name="RulesetRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesExposedCredentialCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesExposedCredentialCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression">ResetPasswordExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression">ResetUsernameExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordExpression` <a name="ResetPasswordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression"></a>

```go
func ResetPasswordExpression()
```

##### `ResetUsernameExpression` <a name="ResetUsernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression"></a>

```go
func ResetUsernameExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput">PasswordExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput">UsernameExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression">PasswordExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression">UsernameExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordExpressionInput`<sup>Optional</sup> <a name="PasswordExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput"></a>

```go
func PasswordExpressionInput() *string
```

- *Type:* *string

---

##### `UsernameExpressionInput`<sup>Optional</sup> <a name="UsernameExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput"></a>

```go
func UsernameExpressionInput() *string
```

- *Type:* *string

---

##### `PasswordExpression`<sup>Required</sup> <a name="PasswordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```go
func PasswordExpression() *string
```

- *Type:* *string

---

##### `UsernameExpression`<sup>Required</sup> <a name="UsernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```go
func UsernameExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---


### RulesetRulesList <a name="RulesetRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get"></a>

```go
func Get(index *f64) RulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesLoggingOutputReference <a name="RulesetRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---


### RulesetRulesOutputReference <a name="RulesetRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters">PutActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck">PutExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit">PutRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters">ResetActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck">ResetExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated">ResetLastUpdated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit">ResetRatelimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionParameters` <a name="PutActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters"></a>

```go
func PutActionParameters(value RulesetRulesActionParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `PutExposedCredentialCheck` <a name="PutExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck"></a>

```go
func PutExposedCredentialCheck(value RulesetRulesExposedCredentialCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging"></a>

```go
func PutLogging(value RulesetRulesLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `PutRatelimit` <a name="PutRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit"></a>

```go
func PutRatelimit(value RulesetRulesRatelimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetActionParameters` <a name="ResetActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters"></a>

```go
func ResetActionParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExposedCredentialCheck` <a name="ResetExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck"></a>

```go
func ResetExposedCredentialCheck()
```

##### `ResetLastUpdated` <a name="ResetLastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated"></a>

```go
func ResetLastUpdated()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetRatelimit` <a name="ResetRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit"></a>

```go
func ResetRatelimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters">ActionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck">ExposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit">Ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput">ActionParametersInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput">ExposedCredentialCheckInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput">LastUpdatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput">RatelimitInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionParameters`<sup>Required</sup> <a name="ActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters"></a>

```go
func ActionParameters() RulesetRulesActionParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a>

---

##### `ExposedCredentialCheck`<sup>Required</sup> <a name="ExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck"></a>

```go
func ExposedCredentialCheck() RulesetRulesExposedCredentialCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging"></a>

```go
func Logging() RulesetRulesLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a>

---

##### `Ratelimit`<sup>Required</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit"></a>

```go
func Ratelimit() RulesetRulesRatelimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ActionParametersInput`<sup>Optional</sup> <a name="ActionParametersInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput"></a>

```go
func ActionParametersInput() RulesetRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExposedCredentialCheckInput`<sup>Optional</sup> <a name="ExposedCredentialCheckInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput"></a>

```go
func ExposedCredentialCheckInput() RulesetRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LastUpdatedInput`<sup>Optional</sup> <a name="LastUpdatedInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput"></a>

```go
func LastUpdatedInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput"></a>

```go
func LoggingInput() RulesetRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `RatelimitInput`<sup>Optional</sup> <a name="RatelimitInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput"></a>

```go
func RatelimitInput() RulesetRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRulesRatelimitOutputReference <a name="RulesetRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/ruleset"

ruleset.NewRulesetRulesRatelimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRulesRatelimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics">ResetCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression">ResetCountingExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout">ResetMitigationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod">ResetRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin">ResetRequestsToOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod">ResetScorePerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName">ResetScoreResponseHeaderName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCharacteristics` <a name="ResetCharacteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics"></a>

```go
func ResetCharacteristics()
```

##### `ResetCountingExpression` <a name="ResetCountingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression"></a>

```go
func ResetCountingExpression()
```

##### `ResetMitigationTimeout` <a name="ResetMitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout"></a>

```go
func ResetMitigationTimeout()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetRequestsPerPeriod` <a name="ResetRequestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod"></a>

```go
func ResetRequestsPerPeriod()
```

##### `ResetRequestsToOrigin` <a name="ResetRequestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin"></a>

```go
func ResetRequestsToOrigin()
```

##### `ResetScorePerPeriod` <a name="ResetScorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod"></a>

```go
func ResetScorePerPeriod()
```

##### `ResetScoreResponseHeaderName` <a name="ResetScoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName"></a>

```go
func ResetScoreResponseHeaderName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput">CharacteristicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput">CountingExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput">MitigationTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput">RequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput">RequestsToOriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput">ScorePerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput">ScoreResponseHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics">Characteristics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression">CountingExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout">MitigationTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod">RequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin">RequestsToOrigin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod">ScorePerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName">ScoreResponseHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CharacteristicsInput`<sup>Optional</sup> <a name="CharacteristicsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput"></a>

```go
func CharacteristicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CountingExpressionInput`<sup>Optional</sup> <a name="CountingExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput"></a>

```go
func CountingExpressionInput() *string
```

- *Type:* *string

---

##### `MitigationTimeoutInput`<sup>Optional</sup> <a name="MitigationTimeoutInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput"></a>

```go
func MitigationTimeoutInput() *f64
```

- *Type:* *f64

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `RequestsPerPeriodInput`<sup>Optional</sup> <a name="RequestsPerPeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput"></a>

```go
func RequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `RequestsToOriginInput`<sup>Optional</sup> <a name="RequestsToOriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput"></a>

```go
func RequestsToOriginInput() interface{}
```

- *Type:* interface{}

---

##### `ScorePerPeriodInput`<sup>Optional</sup> <a name="ScorePerPeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput"></a>

```go
func ScorePerPeriodInput() *f64
```

- *Type:* *f64

---

##### `ScoreResponseHeaderNameInput`<sup>Optional</sup> <a name="ScoreResponseHeaderNameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput"></a>

```go
func ScoreResponseHeaderNameInput() *string
```

- *Type:* *string

---

##### `Characteristics`<sup>Required</sup> <a name="Characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics"></a>

```go
func Characteristics() *[]*string
```

- *Type:* *[]*string

---

##### `CountingExpression`<sup>Required</sup> <a name="CountingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression"></a>

```go
func CountingExpression() *string
```

- *Type:* *string

---

##### `MitigationTimeout`<sup>Required</sup> <a name="MitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```go
func MitigationTimeout() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `RequestsPerPeriod`<sup>Required</sup> <a name="RequestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```go
func RequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `RequestsToOrigin`<sup>Required</sup> <a name="RequestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```go
func RequestsToOrigin() interface{}
```

- *Type:* interface{}

---

##### `ScorePerPeriod`<sup>Required</sup> <a name="ScorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```go
func ScorePerPeriod() *f64
```

- *Type:* *f64

---

##### `ScoreResponseHeaderName`<sup>Required</sup> <a name="ScoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```go
func ScoreResponseHeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---


