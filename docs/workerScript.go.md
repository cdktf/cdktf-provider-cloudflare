# `workerScript` Submodule <a name="`workerScript` Submodule" id="@cdktf/provider-cloudflare.workerScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerScript <a name="WorkerScript" id="@cdktf/provider-cloudflare.workerScript.WorkerScript"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script cloudflare_worker_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScript(scope Construct, id *string, config WorkerScriptConfig) WorkerScript
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig">WorkerScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig">WorkerScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding">PutAnalyticsEngineBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding">PutKvNamespaceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding">PutPlainTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding">PutQueueBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding">PutR2BucketBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding">PutSecretTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding">PutServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding">PutWebassemblyBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding">ResetAnalyticsEngineBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding">ResetKvNamespaceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule">ResetModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding">ResetPlainTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding">ResetQueueBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding">ResetR2BucketBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding">ResetSecretTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding">ResetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding">ResetWebassemblyBinding</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAnalyticsEngineBinding` <a name="PutAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding"></a>

```go
func PutAnalyticsEngineBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKvNamespaceBinding` <a name="PutKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding"></a>

```go
func PutKvNamespaceBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlainTextBinding` <a name="PutPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding"></a>

```go
func PutPlainTextBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueueBinding` <a name="PutQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding"></a>

```go
func PutQueueBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutR2BucketBinding` <a name="PutR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding"></a>

```go
func PutR2BucketBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecretTextBinding` <a name="PutSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding"></a>

```go
func PutSecretTextBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceBinding` <a name="PutServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding"></a>

```go
func PutServiceBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWebassemblyBinding` <a name="PutWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding"></a>

```go
func PutWebassemblyBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAnalyticsEngineBinding` <a name="ResetAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding"></a>

```go
func ResetAnalyticsEngineBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId"></a>

```go
func ResetId()
```

##### `ResetKvNamespaceBinding` <a name="ResetKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding"></a>

```go
func ResetKvNamespaceBinding()
```

##### `ResetModule` <a name="ResetModule" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule"></a>

```go
func ResetModule()
```

##### `ResetPlainTextBinding` <a name="ResetPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding"></a>

```go
func ResetPlainTextBinding()
```

##### `ResetQueueBinding` <a name="ResetQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding"></a>

```go
func ResetQueueBinding()
```

##### `ResetR2BucketBinding` <a name="ResetR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding"></a>

```go
func ResetR2BucketBinding()
```

##### `ResetSecretTextBinding` <a name="ResetSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding"></a>

```go
func ResetSecretTextBinding()
```

##### `ResetServiceBinding` <a name="ResetServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding"></a>

```go
func ResetServiceBinding()
```

##### `ResetWebassemblyBinding` <a name="ResetWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding"></a>

```go
func ResetWebassemblyBinding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.WorkerScript_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.WorkerScript_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.WorkerScript_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding">AnalyticsEngineBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding">KvNamespaceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding">PlainTextBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding">QueueBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding">R2BucketBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding">SecretTextBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding">ServiceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding">WebassemblyBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput">AnalyticsEngineBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput">KvNamespaceBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput">ModuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput">PlainTextBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput">QueueBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput">R2BucketBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput">SecretTextBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput">ServiceBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput">WebassemblyBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module">Module</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyticsEngineBinding`<sup>Required</sup> <a name="AnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding"></a>

```go
func AnalyticsEngineBinding() WorkerScriptAnalyticsEngineBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a>

---

##### `KvNamespaceBinding`<sup>Required</sup> <a name="KvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding"></a>

```go
func KvNamespaceBinding() WorkerScriptKvNamespaceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a>

---

##### `PlainTextBinding`<sup>Required</sup> <a name="PlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding"></a>

```go
func PlainTextBinding() WorkerScriptPlainTextBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a>

---

##### `QueueBinding`<sup>Required</sup> <a name="QueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding"></a>

```go
func QueueBinding() WorkerScriptQueueBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a>

---

##### `R2BucketBinding`<sup>Required</sup> <a name="R2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding"></a>

```go
func R2BucketBinding() WorkerScriptR2BucketBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a>

---

##### `SecretTextBinding`<sup>Required</sup> <a name="SecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding"></a>

```go
func SecretTextBinding() WorkerScriptSecretTextBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a>

---

##### `ServiceBinding`<sup>Required</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding"></a>

```go
func ServiceBinding() WorkerScriptServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a>

---

##### `WebassemblyBinding`<sup>Required</sup> <a name="WebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding"></a>

```go
func WebassemblyBinding() WorkerScriptWebassemblyBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AnalyticsEngineBindingInput`<sup>Optional</sup> <a name="AnalyticsEngineBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput"></a>

```go
func AnalyticsEngineBindingInput() interface{}
```

- *Type:* interface{}

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KvNamespaceBindingInput`<sup>Optional</sup> <a name="KvNamespaceBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput"></a>

```go
func KvNamespaceBindingInput() interface{}
```

- *Type:* interface{}

---

##### `ModuleInput`<sup>Optional</sup> <a name="ModuleInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput"></a>

```go
func ModuleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlainTextBindingInput`<sup>Optional</sup> <a name="PlainTextBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput"></a>

```go
func PlainTextBindingInput() interface{}
```

- *Type:* interface{}

---

##### `QueueBindingInput`<sup>Optional</sup> <a name="QueueBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput"></a>

```go
func QueueBindingInput() interface{}
```

- *Type:* interface{}

---

##### `R2BucketBindingInput`<sup>Optional</sup> <a name="R2BucketBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput"></a>

```go
func R2BucketBindingInput() interface{}
```

- *Type:* interface{}

---

##### `SecretTextBindingInput`<sup>Optional</sup> <a name="SecretTextBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput"></a>

```go
func SecretTextBindingInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceBindingInput`<sup>Optional</sup> <a name="ServiceBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput"></a>

```go
func ServiceBindingInput() interface{}
```

- *Type:* interface{}

---

##### `WebassemblyBindingInput`<sup>Optional</sup> <a name="WebassemblyBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput"></a>

```go
func WebassemblyBindingInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Module`<sup>Required</sup> <a name="Module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module"></a>

```go
func Module() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerScriptAnalyticsEngineBinding <a name="WorkerScriptAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptAnalyticsEngineBinding {
	Dataset: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset">Dataset</a></code> | <code>*string</code> | The name of the Analytics Engine dataset to write to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The name of the Analytics Engine dataset to write to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#dataset WorkerScript#dataset}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

### WorkerScriptConfig <a name="WorkerScriptConfig" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Content: *string,
	Name: *string,
	AccountId: *string,
	AnalyticsEngineBinding: interface{},
	Id: *string,
	KvNamespaceBinding: interface{},
	Module: interface{},
	PlainTextBinding: interface{},
	QueueBinding: interface{},
	R2BucketBinding: interface{},
	SecretTextBinding: interface{},
	ServiceBinding: interface{},
	WebassemblyBinding: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content">Content</a></code> | <code>*string</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name">Name</a></code> | <code>*string</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding">AnalyticsEngineBinding</a></code> | <code>interface{}</code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#id WorkerScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding">KvNamespaceBinding</a></code> | <code>interface{}</code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module">Module</a></code> | <code>interface{}</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding">PlainTextBinding</a></code> | <code>interface{}</code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding">QueueBinding</a></code> | <code>interface{}</code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding">R2BucketBinding</a></code> | <code>interface{}</code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding">SecretTextBinding</a></code> | <code>interface{}</code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding">ServiceBinding</a></code> | <code>interface{}</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding">WebassemblyBinding</a></code> | <code>interface{}</code> | webassembly_binding block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The script content.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#content WorkerScript#content}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#account_id WorkerScript#account_id}

---

##### `AnalyticsEngineBinding`<sup>Optional</sup> <a name="AnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding"></a>

```go
AnalyticsEngineBinding interface{}
```

- *Type:* interface{}

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#id WorkerScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KvNamespaceBinding`<sup>Optional</sup> <a name="KvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding"></a>

```go
KvNamespaceBinding interface{}
```

- *Type:* interface{}

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}

---

##### `Module`<sup>Optional</sup> <a name="Module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module"></a>

```go
Module interface{}
```

- *Type:* interface{}

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#module WorkerScript#module}

---

##### `PlainTextBinding`<sup>Optional</sup> <a name="PlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding"></a>

```go
PlainTextBinding interface{}
```

- *Type:* interface{}

plain_text_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#plain_text_binding WorkerScript#plain_text_binding}

---

##### `QueueBinding`<sup>Optional</sup> <a name="QueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding"></a>

```go
QueueBinding interface{}
```

- *Type:* interface{}

queue_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#queue_binding WorkerScript#queue_binding}

---

##### `R2BucketBinding`<sup>Optional</sup> <a name="R2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding"></a>

```go
R2BucketBinding interface{}
```

- *Type:* interface{}

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}

---

##### `SecretTextBinding`<sup>Optional</sup> <a name="SecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding"></a>

```go
SecretTextBinding interface{}
```

- *Type:* interface{}

secret_text_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#secret_text_binding WorkerScript#secret_text_binding}

---

##### `ServiceBinding`<sup>Optional</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding"></a>

```go
ServiceBinding interface{}
```

- *Type:* interface{}

service_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#service_binding WorkerScript#service_binding}

---

##### `WebassemblyBinding`<sup>Optional</sup> <a name="WebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding"></a>

```go
WebassemblyBinding interface{}
```

- *Type:* interface{}

webassembly_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#webassembly_binding WorkerScript#webassembly_binding}

---

### WorkerScriptKvNamespaceBinding <a name="WorkerScriptKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptKvNamespaceBinding {
	Name: *string,
	NamespaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | ID of the KV namespace you want to use. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

ID of the KV namespace you want to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#namespace_id WorkerScript#namespace_id}

---

### WorkerScriptPlainTextBinding <a name="WorkerScriptPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptPlainTextBinding {
	Name: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text">Text</a></code> | <code>*string</code> | The plain text you want to store. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text"></a>

```go
Text *string
```

- *Type:* *string

The plain text you want to store.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#text WorkerScript#text}

---

### WorkerScriptQueueBinding <a name="WorkerScriptQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptQueueBinding {
	Binding: *string,
	Queue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding">Binding</a></code> | <code>*string</code> | The name of the global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue">Queue</a></code> | <code>*string</code> | Name of the queue you want to use. |

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding"></a>

```go
Binding *string
```

- *Type:* *string

The name of the global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#binding WorkerScript#binding}

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue"></a>

```go
Queue *string
```

- *Type:* *string

Name of the queue you want to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#queue WorkerScript#queue}

---

### WorkerScriptR2BucketBinding <a name="WorkerScriptR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptR2BucketBinding {
	BucketName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the Bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the Bucket to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#bucket_name WorkerScript#bucket_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

### WorkerScriptSecretTextBinding <a name="WorkerScriptSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptSecretTextBinding {
	Name: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text">Text</a></code> | <code>*string</code> | The secret text you want to store. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text"></a>

```go
Text *string
```

- *Type:* *string

The secret text you want to store.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#text WorkerScript#text}

---

### WorkerScriptServiceBinding <a name="WorkerScriptServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptServiceBinding {
	Name: *string,
	Service: *string,
	Environment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service">Service</a></code> | <code>*string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment">Environment</a></code> | <code>*string</code> | The name of the Worker environment to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#service WorkerScript#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#environment WorkerScript#environment}

---

### WorkerScriptWebassemblyBinding <a name="WorkerScriptWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

&workerscript.WorkerScriptWebassemblyBinding {
	Module: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module">Module</a></code> | <code>*string</code> | The base64 encoded wasm module you want to store. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |

---

##### `Module`<sup>Required</sup> <a name="Module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module"></a>

```go
Module *string
```

- *Type:* *string

The base64 encoded wasm module you want to store.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#module WorkerScript#module}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerScriptAnalyticsEngineBindingList <a name="WorkerScriptAnalyticsEngineBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptAnalyticsEngineBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptAnalyticsEngineBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptAnalyticsEngineBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptAnalyticsEngineBindingOutputReference <a name="WorkerScriptAnalyticsEngineBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptAnalyticsEngineBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptAnalyticsEngineBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptKvNamespaceBindingList <a name="WorkerScriptKvNamespaceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptKvNamespaceBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptKvNamespaceBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptKvNamespaceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptKvNamespaceBindingOutputReference <a name="WorkerScriptKvNamespaceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptKvNamespaceBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptKvNamespaceBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptPlainTextBindingList <a name="WorkerScriptPlainTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptPlainTextBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptPlainTextBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptPlainTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptPlainTextBindingOutputReference <a name="WorkerScriptPlainTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptPlainTextBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptPlainTextBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptQueueBindingList <a name="WorkerScriptQueueBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptQueueBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptQueueBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptQueueBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptQueueBindingOutputReference <a name="WorkerScriptQueueBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptQueueBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptQueueBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput">BindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput">QueueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding">Binding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue">Queue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BindingInput`<sup>Optional</sup> <a name="BindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput"></a>

```go
func BindingInput() *string
```

- *Type:* *string

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput"></a>

```go
func QueueInput() *string
```

- *Type:* *string

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding"></a>

```go
func Binding() *string
```

- *Type:* *string

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue"></a>

```go
func Queue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptR2BucketBindingList <a name="WorkerScriptR2BucketBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptR2BucketBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptR2BucketBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptR2BucketBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptR2BucketBindingOutputReference <a name="WorkerScriptR2BucketBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptR2BucketBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptR2BucketBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptSecretTextBindingList <a name="WorkerScriptSecretTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptSecretTextBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptSecretTextBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptSecretTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptSecretTextBindingOutputReference <a name="WorkerScriptSecretTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptSecretTextBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptSecretTextBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptServiceBindingList <a name="WorkerScriptServiceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptServiceBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptServiceBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptServiceBindingOutputReference <a name="WorkerScriptServiceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptServiceBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptServiceBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptWebassemblyBindingList <a name="WorkerScriptWebassemblyBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptWebassemblyBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerScriptWebassemblyBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get"></a>

```go
func Get(index *f64) WorkerScriptWebassemblyBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerScriptWebassemblyBindingOutputReference <a name="WorkerScriptWebassemblyBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workerscript"

workerscript.NewWorkerScriptWebassemblyBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerScriptWebassemblyBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput">ModuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module">Module</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleInput`<sup>Optional</sup> <a name="ModuleInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput"></a>

```go
func ModuleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Module`<sup>Required</sup> <a name="Module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module"></a>

```go
func Module() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


