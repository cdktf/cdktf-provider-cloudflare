# `cloudflare_healthcheck`

Refer to the Terraform Registory for docs: [`cloudflare_healthcheck`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck).

# `healthcheck` Submodule <a name="`healthcheck` Submodule" id="@cdktf/provider-cloudflare.healthcheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Healthcheck <a name="Healthcheck" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck cloudflare_healthcheck}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.NewHealthcheck(scope Construct, id *string, config HealthcheckConfig) Healthcheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig">HealthcheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig">HealthcheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions">ResetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails">ResetConsecutiveFails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses">ResetConsecutiveSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedBody">ResetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedCodes">ResetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTimeouts"></a>

```go
func PutTimeouts(value HealthcheckTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

---

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetCheckRegions` <a name="ResetCheckRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions"></a>

```go
func ResetCheckRegions()
```

##### `ResetConsecutiveFails` <a name="ResetConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails"></a>

```go
func ResetConsecutiveFails()
```

##### `ResetConsecutiveSuccesses` <a name="ResetConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses"></a>

```go
func ResetConsecutiveSuccesses()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpectedBody` <a name="ResetExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedBody"></a>

```go
func ResetExpectedBody()
```

##### `ResetExpectedCodes` <a name="ResetExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedCodes"></a>

```go
func ResetExpectedCodes()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetFollowRedirects"></a>

```go
func ResetFollowRedirects()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetId"></a>

```go
func ResetId()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.Healthcheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.Healthcheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.Healthcheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList">HealthcheckHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference">HealthcheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput">CheckRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput">ConsecutiveFailsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput">ConsecutiveSuccessesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBodyInput">ExpectedBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodesInput">ExpectedCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails">ConsecutiveFails</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses">ConsecutiveSuccesses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBody">ExpectedBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodes">ExpectedCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.header"></a>

```go
func Header() HealthcheckHeaderList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList">HealthcheckHeaderList</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeouts"></a>

```go
func Timeouts() HealthcheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference">HealthcheckTimeoutsOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `CheckRegionsInput`<sup>Optional</sup> <a name="CheckRegionsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput"></a>

```go
func CheckRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConsecutiveFailsInput`<sup>Optional</sup> <a name="ConsecutiveFailsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput"></a>

```go
func ConsecutiveFailsInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveSuccessesInput`<sup>Optional</sup> <a name="ConsecutiveSuccessesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput"></a>

```go
func ConsecutiveSuccessesInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpectedBodyInput`<sup>Optional</sup> <a name="ExpectedBodyInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBodyInput"></a>

```go
func ExpectedBodyInput() *string
```

- *Type:* *string

---

##### `ExpectedCodesInput`<sup>Optional</sup> <a name="ExpectedCodesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodesInput"></a>

```go
func ExpectedCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirectsInput"></a>

```go
func FollowRedirectsInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions"></a>

```go
func CheckRegions() *[]*string
```

- *Type:* *[]*string

---

##### `ConsecutiveFails`<sup>Required</sup> <a name="ConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails"></a>

```go
func ConsecutiveFails() *f64
```

- *Type:* *f64

---

##### `ConsecutiveSuccesses`<sup>Required</sup> <a name="ConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses"></a>

```go
func ConsecutiveSuccesses() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExpectedBody`<sup>Required</sup> <a name="ExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBody"></a>

```go
func ExpectedBody() *string
```

- *Type:* *string

---

##### `ExpectedCodes`<sup>Required</sup> <a name="ExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodes"></a>

```go
func ExpectedCodes() *[]*string
```

- *Type:* *[]*string

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirects"></a>

```go
func FollowRedirects() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcheckConfig <a name="HealthcheckConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

&healthcheck.HealthcheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	Name: *string,
	Type: *string,
	ZoneId: *string,
	AllowInsecure: interface{},
	CheckRegions: *[]*string,
	ConsecutiveFails: *f64,
	ConsecutiveSuccesses: *f64,
	Description: *string,
	ExpectedBody: *string,
	ExpectedCodes: *[]*string,
	FollowRedirects: interface{},
	Header: interface{},
	Id: *string,
	Interval: *f64,
	Method: *string,
	Path: *string,
	Port: *f64,
	Retries: *f64,
	Suspended: interface{},
	Timeout: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8.healthcheck.HealthcheckTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address">Address</a></code> | <code>*string</code> | The hostname or IP address of the origin server to run health checks on. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name">Name</a></code> | <code>*string</code> | A short name to identify the health check. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type">Type</a></code> | <code>*string</code> | The protocol to use for the health check. Available values: `TCP`, `HTTP`, `HTTPS`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Do not validate the certificate when the health check uses HTTPS. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | A list of regions from which to run health checks. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails">ConsecutiveFails</a></code> | <code>*f64</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses">ConsecutiveSuccesses</a></code> | <code>*f64</code> | The number of consecutive successes required from a health check before changing the health to healthy. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedBody">ExpectedBody</a></code> | <code>*string</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedCodes">ExpectedCodes</a></code> | <code>*[]*string</code> | The expected HTTP response codes (e.g. '200') or code ranges (e.g. '2xx' for all codes starting with 2) of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | Follow redirects if the origin returns a 3xx status code. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#id Healthcheck#id}. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval">Interval</a></code> | <code>*f64</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.method">Method</a></code> | <code>*string</code> | The HTTP method to use for the health check. Available values: `connection_established`, `GET`, `HEAD`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.path">Path</a></code> | <code>*string</code> | The endpoint path to health check against. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.port">Port</a></code> | <code>*f64</code> | Port number to connect to for the health check. Defaults to `80`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | If suspended, no health checks are sent to the origin. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | The timeout (in seconds) before marking the health check as failed. Defaults to `5`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The hostname or IP address of the origin server to run health checks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#address Healthcheck#address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A short name to identify the health check. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#name Healthcheck#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The protocol to use for the health check. Available values: `TCP`, `HTTP`, `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#type Healthcheck#type}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Do not validate the certificate when the health check uses HTTPS. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

##### `CheckRegions`<sup>Optional</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions"></a>

```go
CheckRegions *[]*string
```

- *Type:* *[]*string

A list of regions from which to run health checks.

If not set, Cloudflare will pick a default region. Available values: `WNAM`, `ENAM`, `WEU`, `EEU`, `NSAM`, `SSAM`, `OC`, `ME`, `NAF`, `SAF`, `IN`, `SEAS`, `NEAS`, `ALL_REGIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `ConsecutiveFails`<sup>Optional</sup> <a name="ConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails"></a>

```go
ConsecutiveFails *f64
```

- *Type:* *f64

The number of consecutive fails required from a health check before changing the health to unhealthy. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `ConsecutiveSuccesses`<sup>Optional</sup> <a name="ConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses"></a>

```go
ConsecutiveSuccesses *f64
```

- *Type:* *f64

The number of consecutive successes required from a health check before changing the health to healthy. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#description Healthcheck#description}

---

##### `ExpectedBody`<sup>Optional</sup> <a name="ExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedBody"></a>

```go
ExpectedBody *string
```

- *Type:* *string

A case-insensitive sub-string to look for in the response body.

If this string is not found the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

##### `ExpectedCodes`<sup>Optional</sup> <a name="ExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedCodes"></a>

```go
ExpectedCodes *[]*string
```

- *Type:* *[]*string

The expected HTTP response codes (e.g. '200') or code ranges (e.g. '2xx' for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.followRedirects"></a>

```go
FollowRedirects interface{}
```

- *Type:* interface{}

Follow redirects if the origin returns a 3xx status code. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#header Healthcheck#header}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#id Healthcheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase the load on the origin as we check from multiple locations. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The HTTP method to use for the health check. Available values: `connection_established`, `GET`, `HEAD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#method Healthcheck#method}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The endpoint path to health check against. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#path Healthcheck#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to connect to for the health check. Defaults to `80`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#port Healthcheck#port}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately. Defaults to `2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

If suspended, no health checks are sent to the origin. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The timeout (in seconds) before marking the health check as failed. Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeouts"></a>

```go
Timeouts HealthcheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#timeouts Healthcheck#timeouts}

---

### HealthcheckHeader <a name="HealthcheckHeader" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

&healthcheck.HealthcheckHeader {
	Header: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.header">Header</a></code> | <code>*string</code> | The header name. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.values">Values</a></code> | <code>*[]*string</code> | A list of string values for the header. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.header"></a>

```go
Header *string
```

- *Type:* *string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#header Healthcheck#header}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of string values for the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#values Healthcheck#values}

---

### HealthcheckTimeouts <a name="HealthcheckTimeouts" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

&healthcheck.HealthcheckTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#create Healthcheck#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/healthcheck#create Healthcheck#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcheckHeaderList <a name="HealthcheckHeaderList" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.NewHealthcheckHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HealthcheckHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.get"></a>

```go
func Get(index *f64) HealthcheckHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcheckHeaderOutputReference <a name="HealthcheckHeaderOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.NewHealthcheckHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HealthcheckHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcheckTimeoutsOutputReference <a name="HealthcheckTimeoutsOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v8/healthcheck"

healthcheck.NewHealthcheckTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcheckTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



