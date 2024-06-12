# `ipsecTunnel` Submodule <a name="`ipsecTunnel` Submodule" id="@cdktf/provider-cloudflare.ipsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IpsecTunnel <a name="IpsecTunnel" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel cloudflare_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ipsec_tunnel.IpsecTunnel;

IpsecTunnel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudflareEndpoint(java.lang.String)
    .customerEndpoint(java.lang.String)
    .interfaceAddress(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .allowNullCipher(java.lang.Boolean)
//  .allowNullCipher(IResolvable)
//  .description(java.lang.String)
//  .fqdnId(java.lang.String)
//  .healthCheckDirection(java.lang.String)
//  .healthCheckEnabled(java.lang.Boolean)
//  .healthCheckEnabled(IResolvable)
//  .healthCheckRate(java.lang.String)
//  .healthCheckTarget(java.lang.String)
//  .healthCheckType(java.lang.String)
//  .hexId(java.lang.String)
//  .id(java.lang.String)
//  .psk(java.lang.String)
//  .remoteId(java.lang.String)
//  .replayProtection(java.lang.Boolean)
//  .replayProtection(IResolvable)
//  .userId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>java.lang.String</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.customerEndpoint">customerEndpoint</a></code> | <code>java.lang.String</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.allowNullCipher">allowNullCipher</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.fqdnId">fqdnId</a></code> | <code>java.lang.String</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckDirection">healthCheckDirection</a></code> | <code>java.lang.String</code> | Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckEnabled">healthCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckRate">healthCheckRate</a></code> | <code>java.lang.String</code> | Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckTarget">healthCheckTarget</a></code> | <code>java.lang.String</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.hexId">hexId</a></code> | <code>java.lang.String</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.psk">psk</a></code> | <code>java.lang.String</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.remoteId">remoteId</a></code> | <code>java.lang.String</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.replayProtection">replayProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if replay protection is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.cloudflareEndpoint"></a>

- *Type:* java.lang.String

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.customerEndpoint"></a>

- *Type:* java.lang.String

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.interfaceAddress"></a>

- *Type:* java.lang.String

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#interface_address IpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#name IpsecTunnel#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#account_id IpsecTunnel#account_id}

---

##### `allowNullCipher`<sup>Optional</sup> <a name="allowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.allowNullCipher"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#description IpsecTunnel#description}

---

##### `fqdnId`<sup>Optional</sup> <a name="fqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.fqdnId"></a>

- *Type:* java.lang.String

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}

---

##### `healthCheckDirection`<sup>Optional</sup> <a name="healthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckDirection"></a>

- *Type:* java.lang.String

Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_direction IpsecTunnel#health_check_direction}

---

##### `healthCheckEnabled`<sup>Optional</sup> <a name="healthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}

---

##### `healthCheckRate`<sup>Optional</sup> <a name="healthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckRate"></a>

- *Type:* java.lang.String

Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_rate IpsecTunnel#health_check_rate}

---

##### `healthCheckTarget`<sup>Optional</sup> <a name="healthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckTarget"></a>

- *Type:* java.lang.String

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckType"></a>

- *Type:* java.lang.String

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}

---

##### `hexId`<sup>Optional</sup> <a name="hexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.hexId"></a>

- *Type:* java.lang.String

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#hex_id IpsecTunnel#hex_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.psk"></a>

- *Type:* java.lang.String

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#psk IpsecTunnel#psk}

---

##### `remoteId`<sup>Optional</sup> <a name="remoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.remoteId"></a>

- *Type:* java.lang.String

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#remote_id IpsecTunnel#remote_id}

---

##### `replayProtection`<sup>Optional</sup> <a name="replayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.replayProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if replay protection is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#replay_protection IpsecTunnel#replay_protection}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#user_id IpsecTunnel#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher">resetAllowNullCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId">resetFqdnId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckDirection">resetHealthCheckDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled">resetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckRate">resetHealthCheckRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget">resetHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId">resetHexId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk">resetPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId">resetRemoteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetReplayProtection">resetReplayProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAllowNullCipher` <a name="resetAllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher"></a>

```java
public void resetAllowNullCipher()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFqdnId` <a name="resetFqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId"></a>

```java
public void resetFqdnId()
```

##### `resetHealthCheckDirection` <a name="resetHealthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckDirection"></a>

```java
public void resetHealthCheckDirection()
```

##### `resetHealthCheckEnabled` <a name="resetHealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled"></a>

```java
public void resetHealthCheckEnabled()
```

##### `resetHealthCheckRate` <a name="resetHealthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckRate"></a>

```java
public void resetHealthCheckRate()
```

##### `resetHealthCheckTarget` <a name="resetHealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget"></a>

```java
public void resetHealthCheckTarget()
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType"></a>

```java
public void resetHealthCheckType()
```

##### `resetHexId` <a name="resetHexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId"></a>

```java
public void resetHexId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId"></a>

```java
public void resetId()
```

##### `resetPsk` <a name="resetPsk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk"></a>

```java
public void resetPsk()
```

##### `resetRemoteId` <a name="resetRemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId"></a>

```java
public void resetRemoteId()
```

##### `resetReplayProtection` <a name="resetReplayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetReplayProtection"></a>

```java
public void resetReplayProtection()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId"></a>

```java
public void resetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ipsec_tunnel.IpsecTunnel;

IpsecTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ipsec_tunnel.IpsecTunnel;

IpsecTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ipsec_tunnel.IpsecTunnel;

IpsecTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ipsec_tunnel.IpsecTunnel;

IpsecTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IpsecTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput">allowNullCipherInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput">cloudflareEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput">customerEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput">fqdnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirectionInput">healthCheckDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput">healthCheckEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRateInput">healthCheckRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput">healthCheckTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput">hexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput">interfaceAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput">pskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput">remoteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtectionInput">replayProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher">allowNullCipher</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint">customerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId">fqdnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirection">healthCheckDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRate">healthCheckRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget">healthCheckTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId">hexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk">psk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId">remoteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtection">replayProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowNullCipherInput`<sup>Optional</sup> <a name="allowNullCipherInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput"></a>

```java
public java.lang.Object getAllowNullCipherInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudflareEndpointInput`<sup>Optional</sup> <a name="cloudflareEndpointInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput"></a>

```java
public java.lang.String getCloudflareEndpointInput();
```

- *Type:* java.lang.String

---

##### `customerEndpointInput`<sup>Optional</sup> <a name="customerEndpointInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput"></a>

```java
public java.lang.String getCustomerEndpointInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fqdnIdInput`<sup>Optional</sup> <a name="fqdnIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput"></a>

```java
public java.lang.String getFqdnIdInput();
```

- *Type:* java.lang.String

---

##### `healthCheckDirectionInput`<sup>Optional</sup> <a name="healthCheckDirectionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirectionInput"></a>

```java
public java.lang.String getHealthCheckDirectionInput();
```

- *Type:* java.lang.String

---

##### `healthCheckEnabledInput`<sup>Optional</sup> <a name="healthCheckEnabledInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput"></a>

```java
public java.lang.Object getHealthCheckEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckRateInput`<sup>Optional</sup> <a name="healthCheckRateInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRateInput"></a>

```java
public java.lang.String getHealthCheckRateInput();
```

- *Type:* java.lang.String

---

##### `healthCheckTargetInput`<sup>Optional</sup> <a name="healthCheckTargetInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput"></a>

```java
public java.lang.String getHealthCheckTargetInput();
```

- *Type:* java.lang.String

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `hexIdInput`<sup>Optional</sup> <a name="hexIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput"></a>

```java
public java.lang.String getHexIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interfaceAddressInput`<sup>Optional</sup> <a name="interfaceAddressInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput"></a>

```java
public java.lang.String getInterfaceAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput"></a>

```java
public java.lang.String getPskInput();
```

- *Type:* java.lang.String

---

##### `remoteIdInput`<sup>Optional</sup> <a name="remoteIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput"></a>

```java
public java.lang.String getRemoteIdInput();
```

- *Type:* java.lang.String

---

##### `replayProtectionInput`<sup>Optional</sup> <a name="replayProtectionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtectionInput"></a>

```java
public java.lang.Object getReplayProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowNullCipher`<sup>Required</sup> <a name="allowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher"></a>

```java
public java.lang.Object getAllowNullCipher();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint"></a>

```java
public java.lang.String getCloudflareEndpoint();
```

- *Type:* java.lang.String

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint"></a>

```java
public java.lang.String getCustomerEndpoint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fqdnId`<sup>Required</sup> <a name="fqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId"></a>

```java
public java.lang.String getFqdnId();
```

- *Type:* java.lang.String

---

##### `healthCheckDirection`<sup>Required</sup> <a name="healthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirection"></a>

```java
public java.lang.String getHealthCheckDirection();
```

- *Type:* java.lang.String

---

##### `healthCheckEnabled`<sup>Required</sup> <a name="healthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled"></a>

```java
public java.lang.Object getHealthCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckRate`<sup>Required</sup> <a name="healthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRate"></a>

```java
public java.lang.String getHealthCheckRate();
```

- *Type:* java.lang.String

---

##### `healthCheckTarget`<sup>Required</sup> <a name="healthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget"></a>

```java
public java.lang.String getHealthCheckTarget();
```

- *Type:* java.lang.String

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `hexId`<sup>Required</sup> <a name="hexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId"></a>

```java
public java.lang.String getHexId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk"></a>

```java
public java.lang.String getPsk();
```

- *Type:* java.lang.String

---

##### `remoteId`<sup>Required</sup> <a name="remoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId"></a>

```java
public java.lang.String getRemoteId();
```

- *Type:* java.lang.String

---

##### `replayProtection`<sup>Required</sup> <a name="replayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtection"></a>

```java
public java.lang.Object getReplayProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IpsecTunnelConfig <a name="IpsecTunnelConfig" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ipsec_tunnel.IpsecTunnelConfig;

IpsecTunnelConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudflareEndpoint(java.lang.String)
    .customerEndpoint(java.lang.String)
    .interfaceAddress(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .allowNullCipher(java.lang.Boolean)
//  .allowNullCipher(IResolvable)
//  .description(java.lang.String)
//  .fqdnId(java.lang.String)
//  .healthCheckDirection(java.lang.String)
//  .healthCheckEnabled(java.lang.Boolean)
//  .healthCheckEnabled(IResolvable)
//  .healthCheckRate(java.lang.String)
//  .healthCheckTarget(java.lang.String)
//  .healthCheckType(java.lang.String)
//  .hexId(java.lang.String)
//  .id(java.lang.String)
//  .psk(java.lang.String)
//  .remoteId(java.lang.String)
//  .replayProtection(java.lang.Boolean)
//  .replayProtection(IResolvable)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>java.lang.String</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint">customerEndpoint</a></code> | <code>java.lang.String</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher">allowNullCipher</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId">fqdnId</a></code> | <code>java.lang.String</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckDirection">healthCheckDirection</a></code> | <code>java.lang.String</code> | Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckRate">healthCheckRate</a></code> | <code>java.lang.String</code> | Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget">healthCheckTarget</a></code> | <code>java.lang.String</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId">hexId</a></code> | <code>java.lang.String</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk">psk</a></code> | <code>java.lang.String</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId">remoteId</a></code> | <code>java.lang.String</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.replayProtection">replayProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if replay protection is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint"></a>

```java
public java.lang.String getCloudflareEndpoint();
```

- *Type:* java.lang.String

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint"></a>

```java
public java.lang.String getCustomerEndpoint();
```

- *Type:* java.lang.String

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#interface_address IpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#name IpsecTunnel#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#account_id IpsecTunnel#account_id}

---

##### `allowNullCipher`<sup>Optional</sup> <a name="allowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher"></a>

```java
public java.lang.Object getAllowNullCipher();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#description IpsecTunnel#description}

---

##### `fqdnId`<sup>Optional</sup> <a name="fqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId"></a>

```java
public java.lang.String getFqdnId();
```

- *Type:* java.lang.String

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}

---

##### `healthCheckDirection`<sup>Optional</sup> <a name="healthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckDirection"></a>

```java
public java.lang.String getHealthCheckDirection();
```

- *Type:* java.lang.String

Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_direction IpsecTunnel#health_check_direction}

---

##### `healthCheckEnabled`<sup>Optional</sup> <a name="healthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled"></a>

```java
public java.lang.Object getHealthCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}

---

##### `healthCheckRate`<sup>Optional</sup> <a name="healthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckRate"></a>

```java
public java.lang.String getHealthCheckRate();
```

- *Type:* java.lang.String

Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_rate IpsecTunnel#health_check_rate}

---

##### `healthCheckTarget`<sup>Optional</sup> <a name="healthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget"></a>

```java
public java.lang.String getHealthCheckTarget();
```

- *Type:* java.lang.String

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}

---

##### `hexId`<sup>Optional</sup> <a name="hexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId"></a>

```java
public java.lang.String getHexId();
```

- *Type:* java.lang.String

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#hex_id IpsecTunnel#hex_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk"></a>

```java
public java.lang.String getPsk();
```

- *Type:* java.lang.String

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#psk IpsecTunnel#psk}

---

##### `remoteId`<sup>Optional</sup> <a name="remoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId"></a>

```java
public java.lang.String getRemoteId();
```

- *Type:* java.lang.String

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#remote_id IpsecTunnel#remote_id}

---

##### `replayProtection`<sup>Optional</sup> <a name="replayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.replayProtection"></a>

```java
public java.lang.Object getReplayProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if replay protection is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#replay_protection IpsecTunnel#replay_protection}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/ipsec_tunnel#user_id IpsecTunnel#user_id}

---



